# White mirror / black kiosk image refresh

Date: 2026-10-16. Method: built-in `image_gen`, followed by `cwebp` format conversion and native responsive downsizing. No image-generation API key or new runtime dependency.

The owner explicitly selected a white Smart Mirror and a black ID Card Kiosk. Existing local artwork supplied the component layout; these images remain generated design concepts, not photographs, verified enclosure dimensions or proof of device integration. Camera/audio close-ups, the black internal display layer and the captured software UI keep their existing provenance.

Final images are in `public/media/`: `smart-mirror-white-studio-v2.webp`, `kiosk-black-studio-v2.webp` and their `-544.webp` alternatives; `hardware/sm-front-white-v2.webp` and `hardware/sm-body-white-v2.webp`. Full images are 1086 × 1448; small complete products are 544 × 726. All final assets preserve generated alpha. Old media stays archived at its existing paths. The initially generated silver/graphite alternatives and opaque studio renders are not referenced by the website.

References: original `hardware/sm-assembled-v1.webp`, `hardware/sm-front-v1.webp`, `hardware/sm-body-v1.webp`, `kiosk-front.webp`; the accepted white studio image supplies the finish reference for the two mirror layers.

## White mirror studio render

```text
Use case: product-mockup. Production image for a premium bright silver/frosted-white exhibition website. Reconstruct the reference as a pristine professional industrial-design CGI render with smooth precision contours and calm broad neutral studio lighting. High-key on a PURE WHITE #ffffff seamless backdrop, a very subtle soft neutral contact shadow only. OPAQUE white background; do not make transparency, dark backdrop, checkerboard or cutout mask. Portrait 3:4 composition, whole product visible with small comfortable margins, front three-quarter angle showing a little of the RIGHT side, straight verticals, long lens. Match the reference geometry, component positions and proportions. No text, logo, watermark, fake interface, extra product, people, set dressing, blue tint, neon or illustration ornament. This is a concept render, not a product photograph.
Subject: the smart mirror in the reference, with a WHITE body. Make ALL structural panels, outer frame, rear cabinet, lower speaker enclosure and broad caster plinth fine satin porcelain-WHITE powder-coated aluminum. Keep the slim inner glass gasket, two circular speaker grilles, camera optics, microphone grille, NFC reader and wheel tires black. Preserve the tall portrait rectangular mirror, upper center camera and upper left microphone, right mid-edge NFC reader, two lower speaker grilles and wide low rolling base. Glass has a soft pale silver reflection with broad diffused gradients, no room reflection. Polished physical materials and gentle shaded white side faces. Preserve the entire object including caster wheels. Re-render all edges from clean geometry; do not retain torn/pixelated white fringe from the reference.
```

## Black kiosk studio render

```text
Use case: product-mockup. Production image for a premium bright silver/frosted-white exhibition website. Reconstruct the reference as a pristine professional industrial-design CGI render with smooth precision contours and calm broad neutral studio lighting. High-key on a PURE WHITE #ffffff seamless backdrop, a very subtle soft neutral contact shadow only. OPAQUE white background; do not make transparency, dark backdrop, checkerboard or cutout mask. Portrait 3:4 composition, whole product visible with small comfortable margins, front three-quarter angle showing a little of the RIGHT side, straight verticals, long lens. Match the reference geometry, component positions and proportions. No text, logo, watermark, fake interface, extra product, people, set dressing, blue tint, neon or illustration ornament. This is a concept render, not a product photograph.
Subject: the ID Card Kiosk in the reference. Owner explicitly requires a BLACK kiosk. All enclosure panels are satin BLACK anodized metal, subtle charcoal side highlights, soft realistic grain and precise panel seams. A dark glass landscape display, camera top center, modest physical diffused WHITE light strips either side of camera and display, printer aperture at LOWER LEFT with a short BLANK thermal paper slip, square black NFC reader at LOWER RIGHT with a small subtle contactless mark. Preserve the box cabinet without pedestal. Use balanced high-key lighting so the black shape retains detailed shadows and neutral-gray edge highlights; no bright silver panel, blue environment, neon glow, readable paper text or display graphics. Clean black object on pure white, refined companion to the white mirror.
```

## Background extraction for both complete products

```text
Use case: background-extraction. This is a PRECISE BACKGROUND REMOVAL edit for a production website, not a redesign.
The input is the final approved product render. Preserve the exact product shape, colors, proportions, camera view, material gradients, sharp details, all protrusions and canvas positioning. Remove ONLY the pure white studio background and the ground shadow. Return genuine transparent alpha around a pristine smooth antialiased silhouette. Keep all physical product pixels opaque, especially the WHITE enclosure, bright edge highlights, wheels, camera/microphone mount, mirror/screen glass, paper and contactless reader. Do not hollow out white parts. No residual white rectangular mat, torn fringe, isolated white flecks, dark halo, checkerboard or added content. Do not change the product or its silhouette. Keep the 1086 x 1448 portrait 3:4 canvas and existing margins.
```

## White mirror front layer

```text
Use case: precise-object-edit. Asset type: calibrated transparent product component layer for the existing MirrorTing assembly animation.
Re-render image 1 with WHITE exterior finish matching the satin porcelain-white smart mirror in image 2. IMPORTANT: image 1 is the exact registration/geometry reference. Keep its canvas 1086 x 1448 portrait 3:4, object scale, position, proportions, perspective, margins and components unchanged. Only change the outside structural finish and improve surface quality and edges. Do not adopt the scale or composition of image 2. Broad soft neutral studio light, fine satin WHITE powder coat, delicate gray edge shading, clean precision contour. No text, logos, arrows, extra parts, people, glow or environment. GENUINE TRANSPARENT alpha around the object; no floor, backdrop rectangle, painted checkerboard or cast shadow. This is an explanatory concept, not certified hardware geometry. Image 1 is ONLY the detached rectangular FRONT MIRROR PANEL with its upper center camera, upper left microphone and right-side NFC reader. Keep the camera lenses, microphone grille, NFC reader and slim INNER glass gasket black. Make the outer frame and all panel thickness/enclosure edges WHITE, camera/microphone exterior WHITE. Keep the mirror glass pale silver with a clean broad softbox gradient, no window/reflected objects or interface. Do not add speakers, base, wheels or rear cabinet.
```

## White mirror body layer

```text
Use case: precise-object-edit. Asset type: calibrated transparent product component layer for the existing MirrorTing assembly animation.
Re-render image 1 with WHITE exterior finish matching the satin porcelain-white smart mirror in image 2. IMPORTANT: image 1 is the exact registration/geometry reference. Keep its canvas 1086 x 1448 portrait 3:4, object scale, position, proportions, perspective, margins and components unchanged. Only change the outside structural finish and improve surface quality and edges. Do not adopt the scale or composition of image 2. Broad soft neutral studio light, fine satin WHITE powder coat, delicate gray edge shading, clean precision contour. No text, logos, arrows, extra parts, people, glow or environment. GENUINE TRANSPARENT alpha around the object; no floor, backdrop rectangle, painted checkerboard or cast shadow. This is an explanatory concept, not certified hardware geometry. Image 1 is ONLY the rear support BODY, PC box, lower two-speaker enclosure and broad caster BASE. Make the tall structural support/backplate, right cabinet/PC enclosure, angled lower speaker enclosure and wide flat plinth WHITE. Keep TWO speaker grilles and wheel tires black; tiny fasteners neutral dark. The tall rear backplate is a solid opaque physical panel, NOT mirror glass and NOT transparent. Do not add front mirror, camera, microphone, display, screen UI or NFC. Retain the same diagonal top edge, object position and footprint.
```
