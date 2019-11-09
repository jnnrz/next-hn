import ky from 'ky-universal';

export const http = ky.create({
  credentials: "include",
});