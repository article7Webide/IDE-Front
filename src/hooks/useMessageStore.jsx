import { useEffect } from 'react';

import messageStore from '../stores/MessageStore';
import useForceUpdate from './useForeUpdate';

export default function useMessageStore() {
  const forceUpdate = useForceUpdate();

  useEffect(() => {
    messageStore.subscribe(forceUpdate);

    return () => messageStore.unsubscribe(forceUpdate);
  }, [forceUpdate]);

  return messageStore;
}