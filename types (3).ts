import type { Vessel } from '@/core/providers/types';
export interface IntelligenceResult<T>{ modelId:string; confidence:'HIGH'|'MEDIUM'|'LOW'; generatedAt:string; value:T; evidence:string[]; }
export interface IntelligenceModel<T>{ id:string; version:string; run(vessel:Vessel):Promise<IntelligenceResult<T>>; }
