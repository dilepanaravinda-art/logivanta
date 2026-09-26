import { NextResponse } from 'next/server';
import { getVesselProvider,registeredProviders } from '@/core/providers/registry';
import { ruleBasedEtaModel } from '@/models/eta/ruleBased';
export const runtime='nodejs';
export async function GET(){try{const provider=getVesselProvider();const vessels=await provider.listVessels();const enriched=await Promise.all(vessels.map(async v=>({...v,etaIntelligence:await ruleBasedEtaModel.run(v)})));return NextResponse.json({mode:provider.id==='demo'?'DEMO':'LIVE',provider:{id:provider.id,label:provider.label},registeredProviders:registeredProviders(),vessels:enriched});}catch(e){return NextResponse.json({error:e instanceof Error?e.message:'Unknown provider error'},{status:503});}}
