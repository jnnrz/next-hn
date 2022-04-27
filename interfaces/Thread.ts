export interface Thread {
  id: number;
  title: string;
  points: number;
  user: string;
  time: number;
  time_ago: string;
  type: string;
  content: string;
  comments: Thread[];
  comments_count: number;
  level: number;
  url: string;
}
