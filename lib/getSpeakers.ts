import { supabase } from './supabase';
import type { Speaker } from '../components/SpeakerGrid';

function toDirectDriveUrl(url: string) {
  const match = url.match(/\/d\/(.+?)\//);
  return match ? `https://lh3.googleusercontent.com/d/${match[1]}` : url;
}

export async function getSpeakers(context: 'expo' | 'summit'): Promise<Speaker[]> {
  const visibilityColumn = context === 'expo' ? 'show_on_expo' : 'show_on_summit';
  const orderColumn = context === 'expo' ? 'display_order' : 'display_order_summit';

  const { data, error } = await supabase
    .from('speakers')
    .select(`
      full_name,
      job,
      link_photo,
      display_order,
      display_order_summit,
      companies ( company_name )
    `)
    .eq(visibilityColumn, true)
    .order(orderColumn, { ascending: true, nullsFirst: false });

  if (error) {
    console.error('Error fetching speakers:', error);
    return [];
  }

  return data.map((s) => ({
    name: s.full_name,
    title: s.job ?? '',
    org: (s.companies as any)?.company_name ?? '',
    image: s.link_photo ? toDirectDriveUrl(s.link_photo) : '/images/placeholder-speaker.jpg',
  }));
}