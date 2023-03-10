// Authenticator Whitelist
// To add authenticator: Add aaguid and description field of its
// MetadataStatement (can be found in the MDS json)
export const AUTHN_WHITELIST: { aaguid: string, description: string }[] = [
  {aaguid: "ee882879-721c-4913-9775-3dfcce97072a", description: "YubiKey 5 Series"},
  {aaguid: "cb69481e-8ff7-4039-93ec-0a2729a154a8", description: "YubiKey 5 Series"},
  {aaguid: "c1f9a0bc-1dd2-404a-b27f-8e29047a43fd", description: "YubiKey 5 FIPS Series with NFC"},
  {aaguid: "73bb0cd4-e502-49b8-9c6f-b59445bf720b", description: "YubiKey 5 FIPS Series"},
  {aaguid: "2fc0579f-8113-47ea-b116-bb5a8db9202a", description: "YubiKey 5 Series with NFC"},
  {aaguid: "fa2b99dc-9e39-4257-8f92-4a30d23c4118", description: "YubiKey 5 Series with NFC"},
]
