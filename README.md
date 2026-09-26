# LOGIVANTA Vessel Tracking Lab v0.1

Portable Next.js/TypeScript foundation for a modular maritime intelligence platform.

## Run
npm install
npm run dev

## Production check
npm run build
npm start

## Provider switching
Default: `VESSEL_PROVIDER=demo`.
Future provider adapters implement `core/providers/types.ts` and register in `core/providers/registry.ts`.

AISStream credentials must stay server-side. The included AISStream adapter deliberately does not pretend a serverless request is a permanent AIS WebSocket collector. Production live AIS should be ingested by a long-running worker into a persistent normalized store, while the Logivanta UI/API consumes the common provider contract.

## Extensibility
- `core/modules`: module contracts and registry
- `core/providers`: maritime data provider contracts and registry
- `core/models`: intelligence model contracts
- `modules/vessel-tracking`: Module 01
- `providers/*`: swappable AIS/schedule/satellite providers
- `models/*`: replaceable/versioned intelligence models

Add future modules (Port Intelligence, Fleet, Container Tracking, Weather Risk) without changing the vessel-tracking core contract.
