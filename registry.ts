import type { VesselProvider } from './types';
import { demoProvider } from '@/providers/demo/provider';
import { aisStreamProvider } from '@/providers/aisstream/provider';
const providers:Record<string,VesselProvider>={demo:demoProvider,aisstream:aisStreamProvider};
export function getVesselProvider(){ return providers[process.env.VESSEL_PROVIDER||'demo']||demoProvider; }
export function registeredProviders(){ return Object.values(providers).map(p=>({id:p.id,label:p.label})); }
