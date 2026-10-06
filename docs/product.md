# 4-Fit MirrorTing — Product source of truth

This document is authoritative for project facts. Public wording lives in `content.md`; visual rules live in `design.md`.

## Evidence and status

**CONFIRMED** means the project owner supplied the concept, system role, or known hardware in the initialization brief. It does **not** mean a capability has been implemented, integrated, tested, or demonstrated. The microsite repository contains the explanatory website, not evidence of the exhibit's implementation.

**TODO / NOT YET CONFIRMED** means information requires owner confirmation or verifiable project evidence. Do not silently promote an intended capability to an implemented capability. Update this document when evidence changes.

## CONFIRMED — Summary and concept

- Name: **4-Fit MirrorTing**.
- Project type: interactive AI Smart Mirror and companion ID Card Kiosk exhibition project.
- Context: **동양미래대학교 EXPO**.
- Repository purpose: an official, static introduction for EXPO judges and visitors. The homepage explains the workplace problem, sample conversations, the mirror interface, 4-Fit perspectives, physical devices, the six-step intended journey, uses and team, with links to detail pages; all visitors use the same responsive home, including NFC/QR entrants. `/expo/` remains a compatibility entry to that home.
- Central idea: a mirror can become an interface between a person and an intelligent system, beyond a reflective surface.
- The exhibit comprises two related physical devices. The **Smart Mirror** is the main experience; the **ID Card Kiosk** is its entry point.
- This is a physical-system exhibition microsite. It is not a SaaS product, account portal, registration service, or working remote control for the exhibit.

## CONFIRMED — Audience and communication order

| Audience | Primary question | Site response |
| --- | --- | --- |
| Professor or judge | How do the devices and interaction methods relate? | Four Fit design perspectives, honest evidence status, physical architecture and hardware details |
| First-time EXPO visitor | What is it, and how would I experience it? | First-workplace-conversation problem, role-play concept, six-step experience design |
| Developer | What belongs to each device? | Device component lists and clear separation from the microsite stack |
| Portfolio visitor | What was the project trying to achieve? | Durable project story without unverified event dates or live-demo claims |

Present the workplace-conversation problem first, then role-play, the intended 4-Fit feedback and experience, physical devices, implementation evidence and technical detail. Hardware model numbers must not displace the experience in the hero or introductory copy.

## Owner-supplied 2026-10-05 editorial direction

- The primary scenario is **직장 대화 연습**: first day, reporting, questions, explaining a mistake, and responding to feedback. Interview simulation and job training are expansion ideas, not the primary service.
- The owner confirmed the official four perspectives as **Response / Voice / Expression / Posture** (응답 / 목소리 / 표정 / 자세) on 2026-10-05. The earlier cards for 표정 / 목소리 / 내용 / 상황 must not be mixed with this set. Names are confirmed; analysis algorithms and implementation are not.
- A more detailed target journey is registration/NFC → Smart Mirror role-play → AI analysis → 4-Fit feedback → results → retry. This is **intended flow**, not proof that AI analysis or every transition works.
- An extended system story includes ID Printer/NFC, Smart Mirror, 4-Fit, employee result screen/web and an administrator Dashboard. The System page separates the intended visitor journey from the independent fixed-example operations demo. Live employee/result/dashboard linkage has not been verified in this checkout.
- The NFC destination should be the public responsive homepage, as updated by the owner on 2026-10-05. Card/QR production and live NFC linking are outside this repository.
- A screenshot of the running local Mirror-Ting workplace-conversation introduction in `/Users/do_not_delay/Desktop/EXPO/mvp` is now included as **DEMO UI**. Its answer and coaching are explicitly example content, not measured analysis. The owner says completed-hardware photographs and an introduction video will be made later; actual analysis results also remain absent. The three device renders are concept assets.
- `IMPLEMENTED` and `DEMO` labels require direct evidence of that exact feature. The site currently labels the overall flow as a design/concept and lists missing evidence rather than inferring completion.

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

The owner supplied this updated approximate sequence. Display it as a **designed experience flow**, with implementation scope pending confirmation:

1. **사원 등록 · NFC** — enter the kiosk experience; the concrete registration, issuance and NFC mapping remain unconfirmed.
2. **스마트 미러 역할극** — rehearse a workplace conversation at the main device.
3. **AI 분석** — intended analysis stage; model, input and implementation status remain unconfirmed.
4. **4-Fit 피드백** — intended reflection using the four confirmed perspectives; actual scoring/analysis is unconfirmed.
5. **결과 확인** — intended result view; whether it is on the mirror, employee web or another screen is unconfirmed.
6. **재도전** — intended opportunity to rehearse again; actual state handling is unconfirmed.

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

- Current implementation and integration status of each exhibit capability and employee result web. The separate fixed-example operations demo is a UI demonstration; live dashboard linkage is unverified.
- Precise analysis definitions and feature-by-feature implementation status for the confirmed 4-Fit names.
- Actual analysis-result screenshots, hardware photographs, and video plus permission to publish them.
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

## Owner-approved Hero concept — 2026-10-05

The owner requested a monumental image with one mirror in a vast dark space and restrained neutral lighting. An AI-generated concept was created and applied as the homepage Hero, with separate HTML copy: “실전에서 처음 겪지 않도록, 직장생활의 순간을 미리 경험하게 합니다.” Artwork name and CarpeDM are visible. This is a presentation concept, not a hardware photograph or evidence of integration. Video production remains pending. The full site was not changed to a dark theme.

## Visual identity — 2026-10-05

At the owner’s request an original SVG symbol was designed for 4-Fit MirrorTing and applied to the microsite. Four mirror-frame corners and a numeral 4 refer to the four confirmed perspectives. The accompanying team identity remains CarpeDM. The owner subsequently requested removal of this logo. It is no longer used or shipped; the artwork/team names remain text. This does not alter product scope or verify device capabilities.

## Explanatory interactions — 2026-10-05

The microsite now implements local selection of four editorial conversation examples and four 4-Fit explanations. These are static authored examples, not generated AI responses, scoring, or hardware interaction. Response means 상황에 맞는 답변과 내용; Voice means 말의 속도·크기·명료도; Expression means 시선·표정; Posture means 자세. Selection changes only explanatory website content. Product integration and analysis status remain unverified.

## Single responsive entry — 2026-10-05

The owner requested automatic responsive layout instead of choosing a mobile introduction. All pages already use native responsive CSS. The separate EXPO summary is removed; `/expo/` renders the same homepage and sections through the shared App, with relative links appropriate to its nested path. NFC/QR should use the verified public home URL. No NFC writing or public deployment is performed by this change.

## 2026-10-05 — Exhibition presentation polish

The owner requested a stronger exhibition website for KES and 동양미래대학교 EXPO. This is a design objective, not confirmation of KES participation, selection or an award. No event date, booth location or award claim is added.

The homepage now explains why the mirror interface belongs in the intended experience: seeing the situation and one's own appearance in one place, then reflecting on content and delivery. This remains an intended use, not proof of an assembled device or measured training benefit. The six-step designed experience is visible on Home as well as Service. Four original decorative SVG drawings illustrate the confirmed perspectives; the voice drawing is authored artwork, not a recording or measured waveform. The existing light mirror concept is reused for the interface explanation, in addition to the generated Hero and two dark device renders. No new implementation evidence is asserted.

## 2026-10-05 — Official CAD sources and scroll assembly

The owner authorized web research and requested parts that assemble into a device on scroll. Official Azure Kinect DK and Seeed ReSpeaker XVF3800 STEP models were retrieved and converted to local GLB meshes. The camera keeps the published CAD geometry; the microphone keeps the official bare-board assembly, excluding the optional XIAO subtree because that variant is not owner-confirmed. Render colors are presentation choices. LG 65UH5J-H published enclosure dimensions guide the portrait display proportions. This is not a scan of the completed project. Mirror glass, stand, mounting locations and exploded distances remain an arrangement concept. Input devices are enlarged only at the start and return to relative scale as they assemble.

Manufacturer specifications are now cited inside the hardware disclosure: Azure Kinect has a 12 MP RGB and 1 MP ToF depth camera; ReSpeaker has four microphones and manufacturer-provided beamforming, echo cancellation and noise suppression. These are component specifications, not project performance, activated firmware features, analysis accuracy or evidence of integration. No hardware access is added.

Sources checked on 2026-10-05:
- Microsoft hardware documentation: https://learn.microsoft.com/en-us/previous-versions/azure/kinect-dk/hardware-specification
- Microsoft CAD: https://github.com/microsoft/Azure-Kinect-Sensor-SDK/blob/develop/assets/akdk_camera_cad.stp
- Seeed documentation and CAD resources: https://wiki.seeedstudio.com/respeaker_xvf3800_introduction/
- LG specifications: https://www.lg.com/hk_en/business/information-display/digital-signage/standard-digital-signage/65uh5j-h/

## 2026-10-05 — Owner-supplied construction drawings and generated renders

The owner supplied nine one-page engineering PDFs: SM_001 제원, SM_001 하부 베이스 구조, SM_002 부품 배치, SM_003 우측, SM_004 PC BOX, SM_005 마이크 및 카메라 설치 모습, SM_006 카메라 고정 방법, SM_007 모니터 분리 상태, and SM_008 미러 고정 방법. All nine were visually inspected. These drawings supersede the earlier unmeasured enclosure arrangement for the visualization; they do not verify that construction or device integration is complete.

Drawing facts used: 890 mm mirror/frame width; 1705 mm from mirror top to floor; 950×600 mm base; two lower speakers; four 2-inch casters; camera above the top center on an adjustable bracket; microphone housing toward the top left; right-side NFC location; rear PC BOX with sloping top; separable mirror/frame, TV, and rear/base structure. The sheets also mark possible LED installations as under consideration. No LED effect or completed LED installation is asserted on the page.

The owner explicitly requested a more luxurious finish than the color-coded drawings. Six AI-generated transparent 3D images now show the complete concept, its three assembly groups, the camera, and microphone/two-speaker composition. Brushed graphite/platinum finish, optical/glass reflection, surface grain and close-up details are visualization choices. Generated images approximate the supplied proportions; they are not dimension-certified CAD, production photography, exact supplier photographs or evidence of activated features. The previous CAD canvas is no longer the visible System presentation. The manufacturer specification links remain valid technical disclosure sources.

## 2026-10-05 — Camera and audio assembly strengths

The owner requested that the camera and microphone also disassemble and reassemble on scroll, with their hardware strengths emphasized. Six additional transparent images provide camera housing/core/optical front and audio housings/core/grilles, bringing the render set to twelve. Audio includes both the microphone and the two speaker units. Their generated internal PCBs, sensor carriers and speaker driver geometry are illustrative concepts; the supplied enclosure drawings do not establish those internal details. No optional XIAO board, enabled LEDs, exact teardown or installation-completion claim is introduced.

Manufacturer facts rechecked on 2026-10-05: Microsoft's official Kinect page confirms 12 MP RGB and 1 MP ToF depth input in one device; Seeed's official XVF3800 documentation confirms four microphones, beamforming, acoustic echo cancellation and noise suppression. The visitor copy highlights these component capabilities. Firmware selection, activation, project-level recognition and measured performance remain unverified. Exact model identifiers remain in the technical disclosure.

- Microsoft current source: https://learn.microsoft.com/en-us/windows/apps/design/devices/kinect-for-windows
- Seeed current source: https://wiki.seeedstudio.com/respeaker_xvf3800_introduction/

## 2026-10-05 — Assembly presentation order correction

The owner found the assembly sequence visually inconsistent. The existing generated renders now use a fixed reference structure, followed by internal parts, front covers and the completed view. Mirror labels follow rear structure/display → front mirror frame → complete mirror. Audio's microphone and two speaker regions are registered individually. These changes correct the website's conceptual presentation; they do not certify a physical manufacturing procedure, exact internal geometry or completed hardware integration. No new hardware claim or generated asset is added.

## 2026-10-05 — Complete the detail-page story

The owner requested stronger pages across the site for judging and presentation. This is a quality objective, not an award guarantee or new exhibit evidence. FourFit detail explains authored observation points, a workplace-report answer comparison and retry guidance. Uses gives four concrete contexts and intended audiences; interviews and job training remain expansion ideas. Team presents CarpeDM's design intent, three principles and existing materials, without invented members or achievements. Service clarifies device roles in Kiosk → Mirror order and retains six intended stages.

Home, Service and Team reuse the completed drawing-based mirror already used in System. The monumental Hero and supplied Kiosk concept remain separate presentation assets. No new generated media, AI result, hardware integration, data collection or public deployment is asserted.

## 2026-10-05 — Link to the public operations demo

The owner requested a browsable EXPO operations demonstration alongside the microsite. The header can link to a separate fixed-example dashboard; this checkout remains a static introduction with no administrator account, visitor data, backend API or hardware control. A visible demo link does not certify real system integration. Production requires a configured, verified public HTTP(S) destination; an unset address hides the link.


## 2026-10-05 — System specificity audit

The System page now connects the four confirmed perspectives to intended inputs: conversation context/answer → Response, microphone audio → Voice, color video → Expression, depth/distance input → Posture. Sensor input and subsequent interpretation remain separate; no STT, expression/body algorithm, model, scoring or live processing is confirmed. The result surface and registration/NFC/printing linkage remain unverified.

The independently running operations UI was inspected at its development destination and identifies fixed example records and no actual visitor information or device control. It belongs in the evidence inventory, alongside the authored website interactions, drawing-based generated concepts and local UI capture. Its public link is conditional on the existing validated destination; no production destination is invented.

The nine owner-supplied drawing facts are now repeated in the hardware disclosure: upper-center camera, upper-left microphone, right-side NFC, rear PC BOX, two lower speakers and a mobile base. The 890 mm frame width, 1705 mm floor-to-top height and 950×600 mm base are drawing dimensions, not certified measurements of the generated render or assembled exhibit. The hardware section describes manufacturer specifications rather than claiming an undocumented selection rationale.
