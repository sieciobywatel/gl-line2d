var glslify = require('glslify')

exports.lineVertex    = glslify('./shaders/line-vertex.glsl')
exports.lineFragment  = glslify('./shaders/line-fragment.glsl')
exports.mitreVertex   = glslify('./shaders/mitre-vertex.glsl')
exports.mitreFragment = glslify('./shaders/mitre-fragment.glsl')
exports.pickVertex    = glslify('./shaders/pick-vertex.glsl')
exports.pickFragment  = glslify('./shaders/pick-fragment.glsl')
exports.fillVertex    = glslify('./shaders/fill-vertex.glsl')
exports.fillFragment  = glslify('./shaders/fill-fragment.glsl')