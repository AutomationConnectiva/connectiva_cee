import { supabase } from './supabase';
import type { Speaker } from '../components/SpeakerGrid';

function toDirectDriveUrl(url: string) {
  const match = url.match(/\/d\/(.+?)\//);
  return match ? `https://lh3.googleusercontent.com/d/${match[1]}` : url;
}

export async function getSpeakers(): Promise<Speaker[]> {
  const { data, error } = await supabase
    .from('speakers')
    .select(`
      full_name,
      job,
      link_photo,
      companies ( company_name )
    `)
    .order('presentation_id', { ascending: true });

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