import type { IntelligenceModel,IntelligenceResult } from '@/core/models/types';
import type { Vessel } from '@/core/providers/types';
export const ruleBasedEtaModel:IntelligenceModel<string|null>={id:'eta-rule-based',version:'0.1.0',async run(v:Vessel):Promise<IntelligenceResult<string|null>>{const value=v.carrierEta||v.aisEta||null;return {modelId:this.id,confidence:v.carrierEta?'HIGH':v.aisEta?'MEDIUM':'LOW',generatedAt:new Date().toISOString(),value,evidence:[v.carrierEta?'Carrier ETA available':v.aisEta?'AIS-reported ETA available':'No ETA source available']};}};
