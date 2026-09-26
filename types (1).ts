export type SignalStatus='LIVE'|'RECENT'|'STALE'|'OUT_OF_RANGE';
export interface VesselPosition { lat:number; lon:number; sog:number; cog:number; heading:number; observedAt:string; source:string; }
export interface Vessel { id:string; name:string; imo:string; mmsi:string; flag:string; type:string; destination?:string; aisEta?:string; nextPort?:string; nextPortSource?:string; carrierEta?:string; position:VesselPosition; }
export interface VesselProvider { id:string; label:string; listVessels():Promise<Vessel[]>; getVessel(id:string):Promise<Vessel|null>; }
