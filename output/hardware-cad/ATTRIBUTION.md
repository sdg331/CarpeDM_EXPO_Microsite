# Hardware CAD sources

These local GLB derivatives are explanatory 3D models, not photographs of the project or proof of integration.

## Azure Kinect DK

- Author: Microsoft Corporation.
- Source: https://github.com/microsoft/Azure-Kinect-Sensor-SDK/blob/develop/assets/akdk_camera_cad.stp
- Documentation: https://learn.microsoft.com/en-us/previous-versions/azure/kinect-dk/hardware-specification
- License: MIT, reproduced in KINECT-LICENSE.txt.
- Changes: tessellated, colored, welded and simplified for the web; all original solids included.

## ReSpeaker XVF3800

- Author: Seeed Studio.
- Source: https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/3d/respeaker_mic_array_xvf3800_1_with-xiao-0820.stp
- Documentation: https://wiki.seeedstudio.com/respeaker_xvf3800_introduction/
- Product document license: https://wiki.seeedstudio.com/License/
- Published product documents and associated images: CC BY-SA 4.0, https://creativecommons.org/licenses/by-sa/4.0/
- This mesh derivative is attributed to Seeed Studio and distributed under CC BY-SA 4.0.
- Changes: official board assembly tessellated, colored, welded and simplified; optional XIAO assembly excluded because that variant is not confirmed for this project.

The rendered colors are presentation choices. Mirror glass, stand and relative mounting locations are a project arrangement concept, not measured final construction. LG display proportions follow the official 65UH5J-H specification: https://www.lg.com/hk_en/business/information-display/digital-signage/standard-digital-signage/65uh5j-h/

Offline conversion uses occt-import-js 0.0.23 (LGPL-2.1) and meshoptimizer (MIT); neither is shipped to or run in the browser. The runtime uses Three.js (MIT).
