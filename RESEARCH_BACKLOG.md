# Research Backlog

Candidates being researched before they earn an article. Nothing in this
file is published content — it exists so nobody skips validation and turns
a seed name into an unsourced page.

## Status values

- `TODO` — name identified, no research done yet.
- `RESEARCHING` — actively gathering sources.
- `VERIFIED` — identity and core facts confirmed by reliable sources.
- `ARTICLE_READY` — verified and enough material for a full page per the
  structure in [templates/person.json](templates/person.json).
- `PUBLISHED` — article is live.

## How to use this file

1. Add a candidate row with what you're trying to confirm and why they
   matter.
2. Move status forward only when you actually did the work (found sources,
   confirmed identity, resolved ambiguity).
3. Never jump straight to `PUBLISHED` — if there's no `VERIFIED` step behind
   it, the article shouldn't exist yet.
4. Link sources you've already found in the "Potential Sources" column even
   at `TODO`/`RESEARCHING` stage — half-done research is still useful to the
   next contributor.

## Candidates

| Candidate | Reason | Area | Potential Sources | Status |
|---|---|---|---|---|
| Dan Kaminsky | 2008 DNS cache poisoning vulnerability, major internet infra impact | DNS / Network Security | See `data/people/dan-kaminsky.json` | PUBLISHED |
| Joanna Rutkowska | Blue Pill, Qubes OS, virtualization security research | Virtualization / OS Security | See `data/people/joanna-rutkowska.json` | PUBLISHED |
| HD Moore | Metasploit Framework creator, standalone personal biography | Exploit Development | See `data/people/hd-moore.json` | PUBLISHED |
| Katie Moussouris | Bug bounty program pioneer (Microsoft, Pentagon) | Bug Bounty / Vulnerability Disclosure | See `data/people/katie-moussouris.json` | PUBLISHED |
| Mudge (Peiter Zatko) | L0pht, Senate testimony, DARPA Cyber Fast Track, Twitter whistleblower | Vulnerability Research / Policy | See `data/people/mudge-peiter-zatko.json` | PUBLISHED |
| Solar Designer (Alexander Peslyak) | John the Ripper, Openwall, standalone personal biography | Password Security / Open Source Tools | See `data/people/solar-designer.json` | PUBLISHED |
| Robert Tappan Morris | Morris Worm author, standalone personal biography | Internet History / CFAA | See `data/people/robert-tappan-morris.json` | PUBLISHED |
| Tsutomu Shimomura | Tracked Kevin Mitnick, standalone personal biography | Internet History / Incident Response | See `data/people/tsutomu-shimomura.json` | PUBLISHED |
| Halvar Flake | Binary analysis / reverse engineering, zynamics/BinDiff, Rowhammer | Reverse Engineering | See `data/people/halvar-flake.json` | PUBLISHED |
| Charlie Miller | iPhone/Pwn2Own research, Jeep Cherokee remote hack (2015) with Chris Valasek | Exploit Development / Automotive Security | See `data/people/charlie-miller.json` | PUBLISHED |
| Chris Valasek | Jeep Cherokee remote hack (2015) with Charlie Miller | Automotive Security | See `data/people/chris-valasek.json` | PUBLISHED |
| Samy Kamkar | MySpace "Samy" worm (2005), later hardware/RF security research | Web Security / Hardware Hacking | See `data/people/samy-kamkar.json` | PUBLISHED |
| Barnaby Jack | ATM jackpotting, medical device security research | Hardware Hacking / Embedded Security | See `data/people/barnaby-jack.json` | PUBLISHED |
| Bruce Schneier | Cryptographer, security author, public-interest security policy commentary | Cryptography / Policy | See `data/people/bruce-schneier.json` | PUBLISHED |

## Explicitly out of scope until validated

Any name listed only in a planning/prompt document (including this
project's own master instructions) is a lead, not a fact of notability.
Confirm the person exists as a distinct, documented individual, with
sufficient reliable material, before promoting past `TODO`.

## Expansion roadmap (queued candidates, not yet researched)

Goal: grow toward a much larger, still fully-verified archive, with
deliberate coverage across the United States, Europe, and Asia (Latin
America to follow in a later pass; Brazil specifically deferred for now
per maintainer note). Everything below is `TODO` — a name here is a
research lead, not a claim. Each one needs the same WebSearch-backed
verification pass as the published entries before it gets an article. Do
not use this list to justify skipping verification.

### People — United States

| Candidate | Reason | Area |
|---|---|---|
| Alex Stamos | Former Yahoo/Facebook CSO, election-security and disinformation research | Security Leadership / Policy |
| Window Snyder | Security architecture at Microsoft, Mozilla, Apple, Intel; co-author "Threat Modeling" | Security Engineering |
| Chris Wysopal | @stake co-founder, L0pht member, Veracode co-founder | Application Security |
| Marc Maiffret | eEye Digital Security co-founder, early Windows vulnerability research | Vulnerability Research |
| Jeff Moss ("The Dark Tangent") | DEF CON/Black Hat founder | Conferences (cross-check vs. existing DEF CON event page) |
| Elias Levy ("Aleph One") | "Smashing the Stack for Fun and Profit," Bugtraq moderator | Exploit Development |
| Dave Aitel | Immunity Inc. founder, former NSA | Exploit Development |
| Dino Dai Zovi | Early Mac OS X exploitation research, Pwn2Own | Exploit Development |
| Natalie Silvanovich | Google Project Zero, messaging-app/baseband vulnerability research | Vulnerability Research |
| James Forshaw | Google Project Zero, Windows security research, "Attacking Network Protocols" author | Vulnerability Research |
| Tavis Ormandy | Google Project Zero, long history of OS/sandbox vulnerability research | Vulnerability Research |
| Jeremiah Grossman | WhiteHat Security founder, web application security research | Web Security |
| Robert Hansen ("RSnake") | XSS research, ha.ckers.org | Web Security |
| Marcus Ranum | Early firewall design (DEC SEAL, TIS), intrusion detection research | Network Security |
| Brian Krebs | Investigative security journalist, Krebs on Security | Threat Research / Journalism |
| Jon Erickson | Author of "Hacking: The Art of Exploitation" | Exploit Development |
| Window Snyder | (see above) | |
| Jennifer Granick | Security/privacy lawyer, EFF, Stanford | Policy / Law |
| Moxie Marlinspike | Signal Protocol, Signal Messenger founder | Cryptography / Privacy |
| Nate Cardozo | EFF security/privacy attorney | Policy / Law |
| Runa Sandvik | Tor Project, journalist-security work at NYT | Privacy / Anonymity |
| Kevin Mahaffey | Lookout Mobile Security co-founder | Mobile Security |
| Zach Lanier | Mobile/IoT security research | Mobile / IoT Security |
| Kymberlee Price | Vulnerability coordination / bug bounty program leadership | Bug Bounty |
| Casey Ellis | Bugcrowd founder | Bug Bounty |
| Alex Rice | HackerOne co-founder | Bug Bounty |
| Michael "Mudge" Zatko | Already published — cross-link only | (published) |
| Gordon "Fyodor" Lyon | Nmap creator — standalone person page (tool already covered) | Network Security Tools |
| Marcus Hutchins | Already published — cross-link only | (published) |

### People — Europe

| Candidate | Reason | Area / Country |
|---|---|---|
| Mikko Hyppönen | F-Secure/WithSecure malware research, Brain virus author tracking | Malware Research / Finland | See `data/people/mikko-hypponen.json` | PUBLISHED |
| Karsten Nohl | GSM A5/1 cracking, MIFARE RFID, BadUSB, Security Research Labs founder | Telecom / Wireless / Germany | See `data/people/karsten-nohl.json` | PUBLISHED |
| Ross Anderson | "Security Engineering" author, Cambridge academic security research, d. 2024 | Academic Security / UK | See `data/people/ross-anderson.json` | PUBLISHED |
| Michal Zalewski ("lcamtuf") | "Silence on the Wire," afl fuzzer, long Google security research career | Fuzzing / Poland | See `data/people/michal-zalewski.json` | PUBLISHED |
| Ralf-Philipp Weinmann | GSM baseband exploitation, mobile security research | Mobile Security / Germany-Luxembourg | TODO |
| Adam Laurie | RFID/Bluetooth security research (Bluejacking-era work), DEF CON | Wireless / UK | TODO |
| Felix "FX" Lindner | Phenoelit, router/embedded exploitation research | Embedded Security / Germany | TODO |
| Jan "Starbug" Krissler | Biometric spoofing research (fingerprint/iris demos at CCC) | Biometrics / Germany | TODO |
| Frank Rieger | CCC spokesperson, security commentary | Policy / Germany | TODO |
| James Kettle | Burp Suite research lead, HTTP request smuggling/desync research | Web Security / UK | See `data/people/james-kettle.json` | PUBLISHED |
| PortSwigger (Dafydd Stuttard) | Burp Suite creator | Tool Creator / UK | TODO |

### People — Asia

Note: verify exact romanization/spelling and identity carefully before
promoting any of these past `TODO` — several are known primarily by
handle, and getting a name wrong is worse than not publishing.

| Candidate | Reason | Area / Country | Status |
|---|---|---|---|
| Orange Tsai | DEVCORE researcher, web/application-server vulnerability research (e.g. ProxyLogon-adjacent work) | Web Security / Taiwan | RESEARCHING |
| HITCON community founders | Taiwan's long-running hacker conference — verify as a **group**, not individuals, unless a specific founder is clearly documented | Conferences / Taiwan | TODO |

### Groups

| Candidate | Reason | Region |
|---|---|---|
| LulzSec | High-profile 2011 hacktivist/breach spree, offshoot of Anonymous | International |
| Legion of Doom | Already published — cross-link only | (published) |
| Phone Losers of America | Long-running phreaking/prank-call community | US |
| Cypherpunks mailing list | Origin of much of modern privacy-cryptography culture and rhetoric | International |
| Project Zero (Google) | Verify framing as a "group" entry distinct from individual researcher pages | US |
| Keen Security Lab | Automotive/mobile vulnerability research team | China |
| DEVCORE | Web security research firm (Orange Tsai's team) | Taiwan |
| ShadowCrew | Early-2000s carding/identity-fraud forum, notable for the resulting Secret Service operation | US |

### Tools (beyond the 4 already published: Nmap, Wireshark, Metasploit, John the Ripper)

| Candidate | Reason |
|---|---|
| Burp Suite | Dominant web-app pentesting proxy/scanner |
| Ghidra | NSA-released reverse-engineering suite |
| IDA Pro | Long-standing commercial disassembler/decompiler standard |
| radare2 | Open-source reverse-engineering framework |
| Frida | Dynamic instrumentation toolkit |
| Mimikatz | Windows credential-extraction tool, huge impact on AD security practice |
| BloodHound | Active Directory attack-path analysis |
| Hashcat | GPU-accelerated password recovery |
| Aircrack-ng | Wi-Fi security auditing suite |
| sqlmap | Automated SQL injection tool |
| Snort | Open-source intrusion detection, Sourcefire origin |
| Nessus | Vulnerability scanner, pre-dates and shaped the commercial scanner market |
| Cobalt Strike | Red-team/adversary-simulation platform, also widely abused by real attackers — needs careful dual-use framing |
| Volatility | Memory forensics framework |
| YARA | Malware pattern-matching/classification tool |
| Kali Linux / BackTrack | Penetration-testing Linux distribution lineage |

### Publications (beyond the 3 already published: Phrack, 2600, the Hacker Manifesto)

| Candidate | Reason |
|---|---|
| Bugtraq (mailing list) | Foundational full-disclosure vulnerability mailing list |
| Full Disclosure (mailing list) | Successor-era full-disclosure list after Bugtraq's moderation changes |
| Packet Storm | Long-running exploit/advisory archive |
| Uninformed | Early-2000s technical exploitation-research ezine |
| Die Datenschleuder | CCC's long-running print magazine, Germany |

### Events / Discoveries (beyond Morris Worm, DEF CON founding, MIT/TMRC hacker ethic already published)

| Candidate | Reason |
|---|---|
| Heartbleed (2014) | OpenSSL memory-disclosure bug, massive internet-wide patch effort |
| Shellshock (2014) | Bash environment-variable injection vulnerability |
| Stagefright (2015) | Android media-parsing remote-exploitation research |
| KRACK (2017) | WPA2 Wi-Fi handshake vulnerability |
| Spectre / Meltdown (2018) | CPU speculative-execution vulnerability class |
| EternalBlue / WannaCry (2017) | NSA-linked SMB exploit and the resulting global ransomware outbreak (cross-link to the already-published Marcus Hutchins page) |
| NotPetya (2017) | Destructive wiper disguised as ransomware, major supply-chain/geopolitical incident |
| Equifax breach (2017) | Large-scale consumer-data breach, Apache Struts vulnerability |
| SolarWinds / Sunburst (2020) | Major software supply-chain compromise |
| Log4Shell (2021) | Log4j remote-code-execution vulnerability, internet-wide impact |

### Latin America (excluding Brazil for now, per maintainer note)

Genuinely under-covered region; extra care required per SOURCES.md — do
not add a name just to fill a country slot.

| Candidate | Reason | Country | Status |
|---|---|---|---|
| Cesar Cerrudo | IOActive Labs CTO, SQL Server/Windows research, smart-city/traffic-control vulnerability research | Argentina | See `data/people/cesar-cerrudo.json` — PUBLISHED |
| Nicolas Waisman | Immunity/exploit-development research | Argentina | TODO |
| Ekoparty (conference) | Long-running Argentina/LatAm security conference — verify as an event/conference entry | Argentina | TODO |
| Andres Riancho | w3af web-app scanner creator | Argentina | TODO |
