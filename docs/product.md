# 4-Fit MirrorTing — Product source of truth

This document is authoritative for project facts. Public wording lives in `content.md`; visual rules live in `design.md`.

## Evidence and status

**CONFIRMED** means the project owner supplied the concept, system role, or known hardware in the initialization brief. It does **not** mean a capability has been implemented, integrated, tested, or demonstrated. The microsite repository contains the explanatory website, not evidence of the exhibit's implementation.

**TODO / NOT YET CONFIRMED** means information requires owner confirmation or verifiable project evidence. Do not silently promote an intended capability to an implemented capability. Update this document when evidence changes.

## CONFIRMED — Summary and concept

- Name: **4-Fit MirrorTing**.
- Project type: interactive AI Smart Mirror and companion ID Card Kiosk exhibition project.
- Context: **동양미래대학교 EXPO**.
- Repository purpose: an official, static, one-page microsite introducing the project to exhibition visitors and explaining it to judges, professors, developers, and later portfolio visitors.
- Central idea: a mirror can become an interface between a person and an intelligent system, beyond a reflective surface.
- The exhibit comprises two related physical devices. The **Smart Mirror** is the main experience; the **ID Card Kiosk** is its entry point.
- This is a physical-system exhibition microsite. It is not a SaaS product, account portal, registration service, or working remote control for the exhibit.

## CONFIRMED — Audience and communication order

| Audience | Primary question | Site response |
| --- | --- | --- |
| First-time EXPO visitor | What is it, and how would I experience it? | Product reveal, short Korean introduction, six-step experience design |
| Professor or judge | How do the devices and interaction methods relate? | Honest project scope, physical architecture, hardware details and technology roles |
| Developer | What belongs to each device? | Device component lists and clear separation from the microsite stack |
| Portfolio visitor | What was the project trying to achieve? | Durable project story without unverified event dates or live-demo claims |

Present curiosity and concept first, then the intended experience, physical devices, and technical detail. Hardware model numbers must not displace the experience in the hero or introductory copy.

## CONFIRMED — Smart Mirror role and known hardware

The main exhibit combines a large vertical display and mirror surface with depth/body sensing, computer vision, microphone input, speaker output, NFC interaction, a dedicated Windows PC, and an intended AI software interaction layer.

| Known hardware | Intended role in the system |
| --- | --- |
| LG 65UH5J commercial display | Large 65-inch vertical visual interface behind/with the mirror surface |
| Azure Kinect DK | Depth and body/spatial sensing input |
| Seeed ReSpeaker XMOS XVF3800 microphone array | Voice input |
| NFC reader | Identity/experience connection input |
| External speakers | Audio output |
| Dedicated Windows PC | Smart Mirror software and device coordination |

The hardware list comes from the owner. Runtime behavior, recognition methods, model selection, communication protocols, performance, and the integration state are not verified by this list.

## CONFIRMED — ID Card Kiosk role and known hardware

The companion kiosk is intended to introduce visitors to the experience through registration/identification interaction and physical output, with an identity connection toward the Smart Mirror.

| Known hardware or component | Intended role in the system |
| --- | --- |
| Raspberry Pi 5 | Local kiosk coordination |
| Camera Module 3 | Camera input |
| 10.1-inch display | On-device guidance and interaction |
| NFC | Identity/experience connection |
| 80 mm thermal receipt printer | Physical printed output |
| Custom enclosure | Integrated physical device |
| LED lighting | Device lighting |

**Do not equate the thermal printout with an NFC card.** The brief includes both physical output and NFC, but does not specify that they use the same medium or establish the exact issuance process. “사원증 발급” is the intended experience label, not proof of a completed printer/NFC issuance flow.

## CONFIRMED — Intended experience design

The owner supplied this approximate sequence. Display it as a **designed experience flow**, with implementation scope pending confirmation:

1. **사원증 발급** — enter the kiosk experience; the concrete issuance/printing process remains unconfirmed.
2. **사용자 연결** — connect visitor identity or experience context; exact ID/NFC mapping remains unconfirmed.
3. **스마트 미러 접근** — move from the kiosk to the main exhibit.
4. **사용자 인식** — planned identity and sensing interaction; do not infer biometric identity or face recognition.
5. **음성 · 화면 인터랙션** — intended voice input with visual/audio feedback.
6. **개인화된 경험** — intended interaction informed by the visitor context; actual personalization scope is unconfirmed.

The conceptual architecture is **ID Card Kiosk → Identity / Experience Link → Smart Mirror System**. Connections depict design relationships, not a verified network protocol, live connection, database, cloud service, or deployed backend.

## Information not to overemphasize publicly

- Exact hardware models belong in expandable technical details or the architecture section.
- Frontend libraries are implementation details, not the project's main value proposition.
- No invented future-facing visuals, dashboard mockups, signup prompts, pricing, customer logos, testimonials, or software-service conversion funnel.
- Internal TODO labels should stay in documentation/code. Public uncertainty should use clear explanatory wording such as “설계한 체험 흐름” and “실제 구현 범위는 확인 후 안내합니다.”
- Do not expose visitor data, credentials, secret keys, network addresses, or private operational information.

## Supplied visual assets

On 2026-09-22 the owner supplied three concept renders for the hero, Smart Mirror, and ID Card Kiosk. They are authorized presentation assets, not photographs or evidence of enclosure specifications, implementation, or integration.

## TODO / NOT YET CONFIRMED

- Current implementation and integration status of each exhibit capability.
- Exact registration inputs, identity medium, NFC relationship, issuance and print format.
- Whether “사용자 인식” uses NFC, body sensing, another method, or a combination; no biometric identity claim is authorized.
- Actual AI model, AI service provider, prompt behavior, interaction examples, and fallback behavior.
- Scope and data source of personalization.
- Device-to-device communication, persistence, network topology, and offline behavior.
- Visitor-data collection, consent, retention, deletion, and security design. The microsite itself must not add visitor-data collection without a defined need.
- Enclosure measurements, final orientation/placement, accessibility of the physical exhibit, exact display configuration, and final assembled appearance.
- Real photographs, videos, logo artwork, and rights/permissions to publish them.
- EXPO dates, venue/booth location, opening hours, availability of a live demonstration, staffing, or booking process.
- Team member names/roles, contact details, public social handles, live website URL, canonical URL, and production social sharing image.
- Measured results, test sessions, awards, partnerships, and evaluation outcomes.

## Prohibited fabricated claims

Never invent user counts, satisfaction figures, recognition rates, accuracy, latency, AI benchmark performance, awards, completed experiments, partnerships, user-test outcomes, production readiness, or implementation completion.

Do not claim that a sensor identifies a particular person, that NFC stores a full visitor profile, that printed paper contains NFC, or that data is stored locally/in the cloud without evidence. Do not add fake dates, live status indicators, social URLs, operational routes, or event details.

## Change rule

For a new product claim: identify the supporting owner confirmation or repository evidence, update its status here, then update `content.md` and the rendered copy together. If evidence is missing, preserve conservative language. Visual polish never justifies overstating the project's current state.
