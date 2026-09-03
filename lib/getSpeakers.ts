import { supabase } from './supabase';
import type { Speaker } from '../components/SpeakerGrid';

function toDirectDriveUrl(url: string) {
  const match = url.match(/\/d\/(.+?)\//);
  return match ? `https://lh3.googleusercontent.com/d/${match[1]}` : url;
}

export async function getSpeakers(context: 'expo' | 'summit'): Promise<Speaker[]> {
  const filterColumn = context === 'expo' ? 'show_on_expo' : 'show_on_summit';

  const { data, error } = await supabase
    .from('speakers')
    .select(`
      full_name,
      job,
      link_photo,
      display_order,
      companies ( company_name )
    `)
    .eq(filterColumn, true)
    .order('display_order', { ascending: true, nullsFirst: false });

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