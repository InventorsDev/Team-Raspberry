// useRouter.js

import { useRouter } from 'next/router';

export function useQueryParam() {
  const router = useRouter();
  return router.query.slugid || null;
}
