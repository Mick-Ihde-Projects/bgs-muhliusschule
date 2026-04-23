export interface Activity {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: 'ag' | 'freizeit' | 'kreativ' | 'sport';
}
