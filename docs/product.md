# 4-Fit MirrorTing — Product source of truth

This document is authoritative for project facts. Public wording lives in `content.md`; visual rules live in `design.md`.

## Evidence and status

The owner requested a white Smart Mirror and black ID Card Kiosk on 2026-10-16. The generated presentation images and white mirror assembly layers are now published with the bilingual mobile website in Pages release `09404ca24e4ccd0aa1206c1301b454d4b358a94c`. The release includes the separate sample dashboard. This finish choice is not evidence of fabrication or hardware integration; see `product-image-prompts-20261016.md` for provenance and `qa.md` for public delivery checks.

The owner-requested light-glass theme is applied to the introduction and linked sample-dashboard source and publicly deployed as of 2026-10-16. This changes presentation only: product facts, intended functions, software evidence, data and hardware/integration status are unchanged. Browser/UI checks and public deployment are recorded separately in `qa.md`.

**CONFIRMED** means the project owner supplied the concept, system role, or known hardware in the initialization brief. It does **not** mean a capability has been implemented, integrated, tested, or demonstrated. The microsite repository contains the explanatory website, not evidence of the exhibit's implementation.

**TODO / NOT YET CONFIRMED** means information requires owner confirmation or verifiable project evidence. Do not silently promote an intended capability to an implemented capability. Update this document when evidence changes.

## 2026-10-16 — Korean and English visitor access

The digital card offers `한국어 / English` for international visitors. The choice applies to the introduction site's six page types, including explanatory examples, evidence notes and accessible image descriptions. Korean remains the initial default. This translates the introduction only; it does not establish English speech, analysis or hardware support in the exhibit. The separate sample operations dashboard and the original captured UI remain Korean and are identified as such in English copy.

## CONFIRMED — Summary and concept

The 2026-10-16 mobile-app presentation is a responsive website in the same seven HTML entries. It uses the device's system font, larger phone headings, safe-area spacing and a four-link bottom navigation on detail pages. It does not establish a native iOS application, Apple affiliation, offline support or additional exhibit capabilities. Source publication and the separately served public Pages release are recorded independently in `qa.md`.

- Name: **4-Fit MirrorTing**.
- Project type: interactive AI Smart Mirror and companion ID Card Kiosk exhibition project.
- Context: **동양미래대학교 EXPO**.
- Repository purpose: an official, static introduction for EXPO judges and visitors. The mobile-first homepage is a compact digital project card with the project/team identity, purpose and primary detail links; conversations, the mirror-interface rationale, six-step journey, uses and team materials are on their detail pages; all visitors use the same responsive home, including NFC/QR entrants. `/expo/` remains a compatibility entry to that home.
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

On the mobile Home, introduce workplace role-play in one sentence, then prioritize proposed applications and technical development. Put the intended journey, physical devices, implementation evidence and detailed technical roles on their detail pages. Hardware model numbers must not displace the experience in the hero or introductory copy.

## Owner-supplied 2026-10-05 editorial direction

- The exhibition story originally emphasized **직장 대화 연습**: first day, reporting, questions, explaining a mistake, and responding to feedback. The 2026-10-14 owner correction and current repository evidence below supersede the earlier classification of interview and job training as future ideas.
- The owner confirmed the official four perspectives as **Response / Voice / Expression / Posture** (응답 / 목소리 / 표정 / 자세) on 2026-10-05. The earlier cards for 표정 / 목소리 / 내용 / 상황 must not be mixed with this set. Names are confirmed; analysis algorithms and implementation are not.
- A more detailed target journey is registration/NFC → Smart Mirror role-play → AI analysis → 4-Fit feedback → results → retry. This is **intended flow**, not proof that AI analysis or every transition works.
- An extended system story includes ID Printer/NFC, Smart Mirror, 4-Fit, employee result screen/web and an administrator Dashboard. The System page separates the intended visitor journey from the independent fixed-example operations demo. Live employee/result/dashboard linkage has not been verified in this checkout.
- The NFC destination should be the public responsive homepage, as updated by the owner on 2026-10-05. Card/QR production and live NFC linking are outside this repository.
- A screenshot of the running local Mirror-Ting workplace-conversation introduction in `/Users/do_not_delay/Desktop/EXPO/mvp` is now included as **DEMO UI**. Its answer and coaching are explicitly example content, not measured analysis. The owner says completed-hardware photographs and an introduction video will be made later; actual analysis results also remain absent. The three device renders are concept assets.
- `IMPLEMENTED` and `DEMO` labels require direct evidence of that exact feature. The site currently labels the overall flow as a design/concept and lists missing evidence rather than inferring completion.

## CONFIRMED — Smart Mirror role and known hardware

### 2026-10-14 — Software scope checked against the project repository

The owner confirms interview and job-training work already exists and requests analysis of [DMUCarpeDM/2026CarpeDM_EXPO](https://github.com/DMUCarpeDM/2026CarpeDM_EXPO). Reviewed the default main branch at commit `adb9355b0da4ef69a6485811ec82ee46cf133239` through GitHub, independently of older and dirty local checkouts.

- The [mode catalog](https://github.com/DMUCarpeDM/2026CarpeDM_EXPO/blob/adb9355b0da4ef69a6485811ec82ee46cf133239/mvp/src/data/setupCatalog.js) exposes interview, job training and workplace conversation. Interview profiles are full-stack developer, marketing and sales; the current training picker centers on cafe order-taking. Other legacy packs or profiles do not prove that every job is exposed as a complete training flow.
- [Interaction](https://github.com/DMUCarpeDM/2026CarpeDM_EXPO/blob/adb9355b0da4ef69a6485811ec82ee46cf133239/poc/backend/app/services/interaction.py), interview/cafe analyzers, sessions API, analysis orchestration and report code exist. This is source-level implementation evidence, not a new end-to-end or physical-device test.
- Browser MediaPipe pose/hand tracking and local expression ONNX inference feed aggregate features to the backend. Pose classification uses RF/LightGBM ONNX models. The inspected analysis path does not establish use of Kinect depth as a prerequisite; do not advertise depth-driven accuracy improvement without that evidence.
- The current README excludes gaze measurement. Expression preprocessing, interpretation and some context scores remain experimental/provisional; insufficient input is distinguishable from successful measurement. Do not equate implemented pipelines with validated accuracy, coaching efficacy or hiring suitability.
- NFC PC/SC and server-side IDPrinter bridge code exists; its configured physical integration remains untested in this review. A card-free static preview is not live dialogue/analysis, and a configured browser training session is distinct from that preview.
- Old strategy documents contain claims of zero marginal cost, entirely local processing and a vacant competitive market. Current Chrome speech services and external dialogue/evaluation API paths do not support those blanket claims. Costs include hardware, installation, maintenance, connectivity and configured API usage. Old 55-inch BOM estimates are not current 65-inch deployment costs.

Installation in a university shared training room, vocational-training center or enterprise classroom is a proposal pending demand, operator, space, budget and repeated-use checks. No installation, customer, price, cost saving or measured advantage is confirmed by this analysis. Hardware differentiation is a testable training-environment hypothesis, not proof of superiority over existing AI/VR coaching platforms.

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

### 2026-10-14 — Detailed application proposals

The owner requests substantially more detail on utilization. The Uses page now describes university career preparation, new-employee training and team workshops through authored situations, proposed education steps, four dimension-specific reflection questions, learner takeaways and educator checks, preparation and development needs. These are proposed uses, not evidence of deployed training, measured benefits, automatic reports or validated AI feedback.

Learners are described as manually noting their practice sentences and next task. Educators check understanding and organization-specific procedures. The team proposal uses individual mirror rehearsal followed by human discussion; it does not assert simultaneous multi-user AI interaction. Personality, employment suitability, employee ranking and measured educational efficacy are not inferred from face, voice or posture. Future retrieval, voice and record-linking capabilities remain proposals with integration/validation requirements. Home's short summaries and all existing product-status boundaries remain.

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


## 2026-10-06 — final navigation and dashboard connection

The public same-site dashboard is a browsable sample built from dashboard source `46403fa`. It contains illustrative records and browser-local edits, not live employees, AI inference or hardware integration. Uses presents this boundary before linking.


## 2026-10-07 — Black silver-glass showroom reference

Added an AI-generated silver-glass office conversation illustration as explanatory scene art. It is not a service screenshot, captured workplace, hardware photograph or evidence of analysis. The same conceptual setting accompanies all four authored conversation examples.


## 2026-10-07 — Expanded silver-glass workplace scenes

Six additional silver-glass workplace scene illustrations accompany the existing report scene: arrival, questions, mistake explanation, opinion alignment, reflection and collaboration. They are AI-generated conceptual artwork, not captured workplace photographs, actual team portraits, hardware evidence or service screenshots. The four authored conversation examples now select distinct explanatory scenes; product capability and implementation status remain unchanged.


## 2026-10-07 — 4-Fit decorative icon revision

The four explanatory icons use original SVG artwork, replacing the prior generated atlas. This changes presentation only; perspective names, intended analysis scope and evidence status remain unchanged.


## 2026-10-07 — Dimensional 4-Fit icon preference

Owner requested the earlier silver-glass 3D icon style with minor semantic refinements. The edited atlas is decorative conceptual artwork, not face/body capture, landmark mapping or analysis evidence. This supersedes the preceding native-only presentation note.


## 2026-10-07 — Face mesh illustration scope

The Expression illustration depicts an AI-generated conceptual face with surface-conforming mesh geometry. It does not implement detection, measured landmarks, emotion inference, scoring, camera capture or a running analysis process. Public artwork must remain visibly identified as a visualization concept; actual analysis evidence is still unconfirmed.


## 2026-10-07 — Workplace doorway presentation

The owner requested a less monotonous visual story with a closed door opening as visitors move onward. Home's existing first-day concept scene now receives a decorative silver-glass doorway overlay. This is an AI-generated exhibition illustration and native scroll effect, not a photograph, automatic physical door, exhibit entrance specification or hardware behavior. Product flow and implementation claims are unchanged.


## 2026-10-07 — Short visual homepage, complete detail pages

Owner requested fewer words and only major ideas on Main. Home now introduces the service through five visual sections; conversations, the mirror rationale and six-step designed journey belong to Service, reflection questions and examples to Four-Fit, applications to Uses, and extended team purpose to Team. The home overview uses all four approved icons without presenting an analysis result. Keep brief concept/verification labels and all existing evidence boundaries. Introduction was moved from Home to Service; no project capability or completed-video claim is added.


## 2026-10-12 — Reference-based camera exploded view

The owner supplied an Azure Kinect DK exploded reference on 2026-10-12. Camera presentation now follows its sleeve, upper microphone board, main chassis/PCB and optical modules. The derived illustration is AI-generated explanatory artwork, not project photography or manufacturing evidence. Microsoft hardware specifications confirm 12 MP RGB, 1 MP ToF and seven microphones; the Kinect array does not replace the separately specified ReSpeaker voice input.


## 2026-10-12 — Camera parts join on scroll

Camera visual now assembles on scroll, as clarified by the owner. This changes presentation only; sensor specifications and unverified device integration remain unchanged.


## 2026-10-12 — Camera visibility and coherent assembly correction

Camera artwork is now atlas v4 derived from the owner’s reference: an open chassis, separate upper module and optical face. All geometry remains explanatory CGI. Presentation changes do not verify device integration or analysis.


## Owner direction — 2026-10-13

The owner requested a clearer account of what the work is and how it could be used, ordinary Korean wording, restrained silver-glass styling, shorter screens, and Git publication after validation. The site now presents university/career-center preparation, new-employee education and team-conversation practice as proposed settings for the confirmed workplace-rehearsal concept. These are not customer deployments, validated educational results or newly implemented hardware/AI capabilities. Interview and role-specific training remain expansion ideas. Existing concept captions, authored-example labels and live-integration boundaries remain.

## 2026-10-13 — Mobile introduction focused on use and development

The owner prioritizes mobile web visitors arriving via NFC, readable type and a short main page. Home now foregrounds where the project could be used and how it could develop. Proposed directions are education-material retrieval for job-specific scenarios, voice conversation for follow-up questions, and facial/body landmarks with depth information for observable movement feedback. These are author proposals prompted by the owner, not selected providers, committed implementation, integrated models or validated training outcomes. No emotion, personality, identity or accuracy claim is added. Existing detail pages and hardware evidence boundaries remain accessible through the hamburger menu.

Technical sources checked for feasibility context: https://developers.openai.com/api/docs/guides/retrieval ; https://developers.openai.com/api/docs/guides/realtime-conversations ; https://developers.google.com/edge/mediapipe/solutions/vision/pose_landmarker . Additional facial-landmark source: https://developers.google.com/edge/mediapipe/solutions/vision/face_landmarker . Candidate technologies do not establish this project's capabilities. Source material rights, consent, reference quality, noise, latency and tracking reliability require validation before implementation.


## 2026-10-13 — Korean wording pass

The owner requested natural Korean copy using the im-not-ai reference. Revise abstract headings, repeated nominal endings and connector commas without adding product claims. Workplace rehearsal, the four confirmed Fit names, proposed applications, authored examples and unverified device/AI linkage retain their prior status. Concurrent Home/navigation work is preserved; this pass supplies no new hardware or model evidence.

## 2026-10-13 — Preserve presentation effects in the short mobile introduction

The owner's corrective instruction preserves the existing door-opening scene, glass visuals and cinematic product presentation. Reinstating these assets does not add implementation evidence: the scene and icons remain concept artwork. Home retains use and development as its central explanatory content. No new asset, model or hardware capability is introduced.

## 2026-10-13 — Reading-first controls

Reduce repeated page navigation and explanatory selection buttons per the owner's feedback. The site retains all intended-experience and capability boundaries; native selectors change authored explanation only. This is a presentation change, not a new AI, NFC, data or hardware feature. All five detail destinations remain accessible from the hamburger.

## 2026-10-13 — Mobile layout and presentation audit

Correct layout/readability throughout the existing microsite without adding capabilities. Mobile hardware scenes remain conceptual assembly illustrations and now animate in ordinary document flow, including short screens. This does not implement device control, sensors, recognition or AI. Physical-device, real mobile-browser and NFC validation remain separate from browser viewport checks.


## 2026-10-14 — Mobile silver-glass interface scope

The owner requests one mobile-first treatment for the introduction and the separate dashboard, improved imagery and shorter screens. Home now uses the existing drawing-based mirror as a contained concept visual, replacing the monumental room in the active Hero. Generated people/office scenes and cropped icon atlases are removed from the primary reading flow; existing source assets remain. All product-status notices remain. Topic tabs and native disclosures reorganize existing explanations without adding AI, identity, NFC or hardware interaction. The dashboard continues to use the existing sample workspace and browser-local edits. This revision is local; no new public release or physical-device validation is asserted.

## 2026-10-15 — Digital business card purpose

The owner explicitly clarified that the microsite is used as a business card. Its entry must immediately identify 4-Fit MirrorTing, CarpeDM and the AI smart mirror project, then offer a few clear links. The operations dashboard remains a secondary, explicitly sample destination. This changes the presentation hierarchy, not product capabilities, hardware evidence or implementation scope. No personal contact details, QR destination, new deployment or verified performance were supplied by this request.

## 2026-10-15 — Remove repeated image captions

The owner explicitly requested removing AI/concept/non-photograph text from the visitor UI and reducing arrows. Remove per-image captions and use neutral design-material wording in the evidence inventory. The assets, their concept classification and descriptive alternatives are unchanged; no image is newly classified as photography and no physical completion or analytical performance is confirmed by this display change.

## 2026-10-15 — Black-glass visual refinement

Owner requested a black-background glassmorphism UI. Home remains a mobile digital project card; detailed subjects and the separate sample dashboard retain their existing scope. This is a visual-only refinement: no new AI, hardware, identity, data or integration claim. Local artwork and truthful alternatives/metadata remain unchanged.

## 2026-10-15 — Friendly project explanation and source evidence

Owner requests fuller, more welcoming exhibition UI suitable for competition presentation. Home remains the digital card, with a concrete mirror/four-perspective explanation and destination helpers. Service opens with purpose and reading guidance; System shows a compact process map and meaningful evidence links. This is a communication/design improvement, not evidence of an award or new runtime capability.

Rechecked public source at the already-reviewed adb9355b0da4ef69a6485811ec82ee46cf133239 through the GitHub connector: setupCatalog.js exposes interview/training/workplace modes; interaction.py manages mode-specific progress; report.py constructs observed/interpretation/suggestion segments and distinguishes unmeasured voice/expression/posture. The pinned source links are now directly accessible in the evidence topic. This review does not run the exhibit or validate accuracy, efficacy, identity or physical integration.

New situation questions and answer-structure explanations are authored teaching examples. Static product/process panels reuse existing project artwork and error silhouettes. No customer, efficacy metric, member identity/contact, event detail, live endpoint or completed-hardware claim is added.
