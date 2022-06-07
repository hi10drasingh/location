[Droom Google Location Plugin - v1.0.13](../README.md) / [Exports](../modules.md) / [input](../modules/input.md) / [<internal\>](../modules/input._internal_.md) / WebGLRenderingContext

# Interface: WebGLRenderingContext

[input](../modules/input.md).[<internal>](../modules/input._internal_.md).WebGLRenderingContext

Provides an interface to the OpenGL ES 2.0 graphics rendering context for the drawing surface of an HTML <canvas> element.

## Hierarchy

- [`WebGLRenderingContextBase`](input._internal_.WebGLRenderingContextBase.md)

- [`WebGLRenderingContextOverloads`](input._internal_.WebGLRenderingContextOverloads.md)

  ↳ **`WebGLRenderingContext`**

## Table of contents

### Properties

- [ACTIVE\_ATTRIBUTES](input._internal_.WebGLRenderingContext.md#active_attributes)
- [ACTIVE\_TEXTURE](input._internal_.WebGLRenderingContext.md#active_texture)
- [ACTIVE\_UNIFORMS](input._internal_.WebGLRenderingContext.md#active_uniforms)
- [ALIASED\_LINE\_WIDTH\_RANGE](input._internal_.WebGLRenderingContext.md#aliased_line_width_range)
- [ALIASED\_POINT\_SIZE\_RANGE](input._internal_.WebGLRenderingContext.md#aliased_point_size_range)
- [ALPHA](input._internal_.WebGLRenderingContext.md#alpha)
- [ALPHA\_BITS](input._internal_.WebGLRenderingContext.md#alpha_bits)
- [ALWAYS](input._internal_.WebGLRenderingContext.md#always)
- [ARRAY\_BUFFER](input._internal_.WebGLRenderingContext.md#array_buffer)
- [ARRAY\_BUFFER\_BINDING](input._internal_.WebGLRenderingContext.md#array_buffer_binding)
- [ATTACHED\_SHADERS](input._internal_.WebGLRenderingContext.md#attached_shaders)
- [BACK](input._internal_.WebGLRenderingContext.md#back)
- [BLEND](input._internal_.WebGLRenderingContext.md#blend)
- [BLEND\_COLOR](input._internal_.WebGLRenderingContext.md#blend_color)
- [BLEND\_DST\_ALPHA](input._internal_.WebGLRenderingContext.md#blend_dst_alpha)
- [BLEND\_DST\_RGB](input._internal_.WebGLRenderingContext.md#blend_dst_rgb)
- [BLEND\_EQUATION](input._internal_.WebGLRenderingContext.md#blend_equation)
- [BLEND\_EQUATION\_ALPHA](input._internal_.WebGLRenderingContext.md#blend_equation_alpha)
- [BLEND\_EQUATION\_RGB](input._internal_.WebGLRenderingContext.md#blend_equation_rgb)
- [BLEND\_SRC\_ALPHA](input._internal_.WebGLRenderingContext.md#blend_src_alpha)
- [BLEND\_SRC\_RGB](input._internal_.WebGLRenderingContext.md#blend_src_rgb)
- [BLUE\_BITS](input._internal_.WebGLRenderingContext.md#blue_bits)
- [BOOL](input._internal_.WebGLRenderingContext.md#bool)
- [BOOL\_VEC2](input._internal_.WebGLRenderingContext.md#bool_vec2)
- [BOOL\_VEC3](input._internal_.WebGLRenderingContext.md#bool_vec3)
- [BOOL\_VEC4](input._internal_.WebGLRenderingContext.md#bool_vec4)
- [BROWSER\_DEFAULT\_WEBGL](input._internal_.WebGLRenderingContext.md#browser_default_webgl)
- [BUFFER\_SIZE](input._internal_.WebGLRenderingContext.md#buffer_size)
- [BUFFER\_USAGE](input._internal_.WebGLRenderingContext.md#buffer_usage)
- [BYTE](input._internal_.WebGLRenderingContext.md#byte)
- [CCW](input._internal_.WebGLRenderingContext.md#ccw)
- [CLAMP\_TO\_EDGE](input._internal_.WebGLRenderingContext.md#clamp_to_edge)
- [COLOR\_ATTACHMENT0](input._internal_.WebGLRenderingContext.md#color_attachment0)
- [COLOR\_BUFFER\_BIT](input._internal_.WebGLRenderingContext.md#color_buffer_bit)
- [COLOR\_CLEAR\_VALUE](input._internal_.WebGLRenderingContext.md#color_clear_value)
- [COLOR\_WRITEMASK](input._internal_.WebGLRenderingContext.md#color_writemask)
- [COMPILE\_STATUS](input._internal_.WebGLRenderingContext.md#compile_status)
- [COMPRESSED\_TEXTURE\_FORMATS](input._internal_.WebGLRenderingContext.md#compressed_texture_formats)
- [CONSTANT\_ALPHA](input._internal_.WebGLRenderingContext.md#constant_alpha)
- [CONSTANT\_COLOR](input._internal_.WebGLRenderingContext.md#constant_color)
- [CONTEXT\_LOST\_WEBGL](input._internal_.WebGLRenderingContext.md#context_lost_webgl)
- [CULL\_FACE](input._internal_.WebGLRenderingContext.md#cull_face)
- [CULL\_FACE\_MODE](input._internal_.WebGLRenderingContext.md#cull_face_mode)
- [CURRENT\_PROGRAM](input._internal_.WebGLRenderingContext.md#current_program)
- [CURRENT\_VERTEX\_ATTRIB](input._internal_.WebGLRenderingContext.md#current_vertex_attrib)
- [CW](input._internal_.WebGLRenderingContext.md#cw)
- [DECR](input._internal_.WebGLRenderingContext.md#decr)
- [DECR\_WRAP](input._internal_.WebGLRenderingContext.md#decr_wrap)
- [DELETE\_STATUS](input._internal_.WebGLRenderingContext.md#delete_status)
- [DEPTH\_ATTACHMENT](input._internal_.WebGLRenderingContext.md#depth_attachment)
- [DEPTH\_BITS](input._internal_.WebGLRenderingContext.md#depth_bits)
- [DEPTH\_BUFFER\_BIT](input._internal_.WebGLRenderingContext.md#depth_buffer_bit)
- [DEPTH\_CLEAR\_VALUE](input._internal_.WebGLRenderingContext.md#depth_clear_value)
- [DEPTH\_COMPONENT](input._internal_.WebGLRenderingContext.md#depth_component)
- [DEPTH\_COMPONENT16](input._internal_.WebGLRenderingContext.md#depth_component16)
- [DEPTH\_FUNC](input._internal_.WebGLRenderingContext.md#depth_func)
- [DEPTH\_RANGE](input._internal_.WebGLRenderingContext.md#depth_range)
- [DEPTH\_STENCIL](input._internal_.WebGLRenderingContext.md#depth_stencil)
- [DEPTH\_STENCIL\_ATTACHMENT](input._internal_.WebGLRenderingContext.md#depth_stencil_attachment)
- [DEPTH\_TEST](input._internal_.WebGLRenderingContext.md#depth_test)
- [DEPTH\_WRITEMASK](input._internal_.WebGLRenderingContext.md#depth_writemask)
- [DITHER](input._internal_.WebGLRenderingContext.md#dither)
- [DONT\_CARE](input._internal_.WebGLRenderingContext.md#dont_care)
- [DST\_ALPHA](input._internal_.WebGLRenderingContext.md#dst_alpha)
- [DST\_COLOR](input._internal_.WebGLRenderingContext.md#dst_color)
- [DYNAMIC\_DRAW](input._internal_.WebGLRenderingContext.md#dynamic_draw)
- [ELEMENT\_ARRAY\_BUFFER](input._internal_.WebGLRenderingContext.md#element_array_buffer)
- [ELEMENT\_ARRAY\_BUFFER\_BINDING](input._internal_.WebGLRenderingContext.md#element_array_buffer_binding)
- [EQUAL](input._internal_.WebGLRenderingContext.md#equal)
- [FASTEST](input._internal_.WebGLRenderingContext.md#fastest)
- [FLOAT](input._internal_.WebGLRenderingContext.md#float)
- [FLOAT\_MAT2](input._internal_.WebGLRenderingContext.md#float_mat2)
- [FLOAT\_MAT3](input._internal_.WebGLRenderingContext.md#float_mat3)
- [FLOAT\_MAT4](input._internal_.WebGLRenderingContext.md#float_mat4)
- [FLOAT\_VEC2](input._internal_.WebGLRenderingContext.md#float_vec2)
- [FLOAT\_VEC3](input._internal_.WebGLRenderingContext.md#float_vec3)
- [FLOAT\_VEC4](input._internal_.WebGLRenderingContext.md#float_vec4)
- [FRAGMENT\_SHADER](input._internal_.WebGLRenderingContext.md#fragment_shader)
- [FRAMEBUFFER](input._internal_.WebGLRenderingContext.md#framebuffer)
- [FRAMEBUFFER\_ATTACHMENT\_OBJECT\_NAME](input._internal_.WebGLRenderingContext.md#framebuffer_attachment_object_name)
- [FRAMEBUFFER\_ATTACHMENT\_OBJECT\_TYPE](input._internal_.WebGLRenderingContext.md#framebuffer_attachment_object_type)
- [FRAMEBUFFER\_ATTACHMENT\_TEXTURE\_CUBE\_MAP\_FACE](input._internal_.WebGLRenderingContext.md#framebuffer_attachment_texture_cube_map_face)
- [FRAMEBUFFER\_ATTACHMENT\_TEXTURE\_LEVEL](input._internal_.WebGLRenderingContext.md#framebuffer_attachment_texture_level)
- [FRAMEBUFFER\_BINDING](input._internal_.WebGLRenderingContext.md#framebuffer_binding)
- [FRAMEBUFFER\_COMPLETE](input._internal_.WebGLRenderingContext.md#framebuffer_complete)
- [FRAMEBUFFER\_INCOMPLETE\_ATTACHMENT](input._internal_.WebGLRenderingContext.md#framebuffer_incomplete_attachment)
- [FRAMEBUFFER\_INCOMPLETE\_DIMENSIONS](input._internal_.WebGLRenderingContext.md#framebuffer_incomplete_dimensions)
- [FRAMEBUFFER\_INCOMPLETE\_MISSING\_ATTACHMENT](input._internal_.WebGLRenderingContext.md#framebuffer_incomplete_missing_attachment)
- [FRAMEBUFFER\_UNSUPPORTED](input._internal_.WebGLRenderingContext.md#framebuffer_unsupported)
- [FRONT](input._internal_.WebGLRenderingContext.md#front)
- [FRONT\_AND\_BACK](input._internal_.WebGLRenderingContext.md#front_and_back)
- [FRONT\_FACE](input._internal_.WebGLRenderingContext.md#front_face)
- [FUNC\_ADD](input._internal_.WebGLRenderingContext.md#func_add)
- [FUNC\_REVERSE\_SUBTRACT](input._internal_.WebGLRenderingContext.md#func_reverse_subtract)
- [FUNC\_SUBTRACT](input._internal_.WebGLRenderingContext.md#func_subtract)
- [GENERATE\_MIPMAP\_HINT](input._internal_.WebGLRenderingContext.md#generate_mipmap_hint)
- [GEQUAL](input._internal_.WebGLRenderingContext.md#gequal)
- [GREATER](input._internal_.WebGLRenderingContext.md#greater)
- [GREEN\_BITS](input._internal_.WebGLRenderingContext.md#green_bits)
- [HIGH\_FLOAT](input._internal_.WebGLRenderingContext.md#high_float)
- [HIGH\_INT](input._internal_.WebGLRenderingContext.md#high_int)
- [IMPLEMENTATION\_COLOR\_READ\_FORMAT](input._internal_.WebGLRenderingContext.md#implementation_color_read_format)
- [IMPLEMENTATION\_COLOR\_READ\_TYPE](input._internal_.WebGLRenderingContext.md#implementation_color_read_type)
- [INCR](input._internal_.WebGLRenderingContext.md#incr)
- [INCR\_WRAP](input._internal_.WebGLRenderingContext.md#incr_wrap)
- [INT](input._internal_.WebGLRenderingContext.md#int)
- [INT\_VEC2](input._internal_.WebGLRenderingContext.md#int_vec2)
- [INT\_VEC3](input._internal_.WebGLRenderingContext.md#int_vec3)
- [INT\_VEC4](input._internal_.WebGLRenderingContext.md#int_vec4)
- [INVALID\_ENUM](input._internal_.WebGLRenderingContext.md#invalid_enum)
- [INVALID\_FRAMEBUFFER\_OPERATION](input._internal_.WebGLRenderingContext.md#invalid_framebuffer_operation)
- [INVALID\_OPERATION](input._internal_.WebGLRenderingContext.md#invalid_operation)
- [INVALID\_VALUE](input._internal_.WebGLRenderingContext.md#invalid_value)
- [INVERT](input._internal_.WebGLRenderingContext.md#invert)
- [KEEP](input._internal_.WebGLRenderingContext.md#keep)
- [LEQUAL](input._internal_.WebGLRenderingContext.md#lequal)
- [LESS](input._internal_.WebGLRenderingContext.md#less)
- [LINEAR](input._internal_.WebGLRenderingContext.md#linear)
- [LINEAR\_MIPMAP\_LINEAR](input._internal_.WebGLRenderingContext.md#linear_mipmap_linear)
- [LINEAR\_MIPMAP\_NEAREST](input._internal_.WebGLRenderingContext.md#linear_mipmap_nearest)
- [LINES](input._internal_.WebGLRenderingContext.md#lines)
- [LINE\_LOOP](input._internal_.WebGLRenderingContext.md#line_loop)
- [LINE\_STRIP](input._internal_.WebGLRenderingContext.md#line_strip)
- [LINE\_WIDTH](input._internal_.WebGLRenderingContext.md#line_width)
- [LINK\_STATUS](input._internal_.WebGLRenderingContext.md#link_status)
- [LOW\_FLOAT](input._internal_.WebGLRenderingContext.md#low_float)
- [LOW\_INT](input._internal_.WebGLRenderingContext.md#low_int)
- [LUMINANCE](input._internal_.WebGLRenderingContext.md#luminance)
- [LUMINANCE\_ALPHA](input._internal_.WebGLRenderingContext.md#luminance_alpha)
- [MAX\_COMBINED\_TEXTURE\_IMAGE\_UNITS](input._internal_.WebGLRenderingContext.md#max_combined_texture_image_units)
- [MAX\_CUBE\_MAP\_TEXTURE\_SIZE](input._internal_.WebGLRenderingContext.md#max_cube_map_texture_size)
- [MAX\_FRAGMENT\_UNIFORM\_VECTORS](input._internal_.WebGLRenderingContext.md#max_fragment_uniform_vectors)
- [MAX\_RENDERBUFFER\_SIZE](input._internal_.WebGLRenderingContext.md#max_renderbuffer_size)
- [MAX\_TEXTURE\_IMAGE\_UNITS](input._internal_.WebGLRenderingContext.md#max_texture_image_units)
- [MAX\_TEXTURE\_SIZE](input._internal_.WebGLRenderingContext.md#max_texture_size)
- [MAX\_VARYING\_VECTORS](input._internal_.WebGLRenderingContext.md#max_varying_vectors)
- [MAX\_VERTEX\_ATTRIBS](input._internal_.WebGLRenderingContext.md#max_vertex_attribs)
- [MAX\_VERTEX\_TEXTURE\_IMAGE\_UNITS](input._internal_.WebGLRenderingContext.md#max_vertex_texture_image_units)
- [MAX\_VERTEX\_UNIFORM\_VECTORS](input._internal_.WebGLRenderingContext.md#max_vertex_uniform_vectors)
- [MAX\_VIEWPORT\_DIMS](input._internal_.WebGLRenderingContext.md#max_viewport_dims)
- [MEDIUM\_FLOAT](input._internal_.WebGLRenderingContext.md#medium_float)
- [MEDIUM\_INT](input._internal_.WebGLRenderingContext.md#medium_int)
- [MIRRORED\_REPEAT](input._internal_.WebGLRenderingContext.md#mirrored_repeat)
- [NEAREST](input._internal_.WebGLRenderingContext.md#nearest)
- [NEAREST\_MIPMAP\_LINEAR](input._internal_.WebGLRenderingContext.md#nearest_mipmap_linear)
- [NEAREST\_MIPMAP\_NEAREST](input._internal_.WebGLRenderingContext.md#nearest_mipmap_nearest)
- [NEVER](input._internal_.WebGLRenderingContext.md#never)
- [NICEST](input._internal_.WebGLRenderingContext.md#nicest)
- [NONE](input._internal_.WebGLRenderingContext.md#none)
- [NOTEQUAL](input._internal_.WebGLRenderingContext.md#notequal)
- [NO\_ERROR](input._internal_.WebGLRenderingContext.md#no_error)
- [ONE](input._internal_.WebGLRenderingContext.md#one)
- [ONE\_MINUS\_CONSTANT\_ALPHA](input._internal_.WebGLRenderingContext.md#one_minus_constant_alpha)
- [ONE\_MINUS\_CONSTANT\_COLOR](input._internal_.WebGLRenderingContext.md#one_minus_constant_color)
- [ONE\_MINUS\_DST\_ALPHA](input._internal_.WebGLRenderingContext.md#one_minus_dst_alpha)
- [ONE\_MINUS\_DST\_COLOR](input._internal_.WebGLRenderingContext.md#one_minus_dst_color)
- [ONE\_MINUS\_SRC\_ALPHA](input._internal_.WebGLRenderingContext.md#one_minus_src_alpha)
- [ONE\_MINUS\_SRC\_COLOR](input._internal_.WebGLRenderingContext.md#one_minus_src_color)
- [OUT\_OF\_MEMORY](input._internal_.WebGLRenderingContext.md#out_of_memory)
- [PACK\_ALIGNMENT](input._internal_.WebGLRenderingContext.md#pack_alignment)
- [POINTS](input._internal_.WebGLRenderingContext.md#points)
- [POLYGON\_OFFSET\_FACTOR](input._internal_.WebGLRenderingContext.md#polygon_offset_factor)
- [POLYGON\_OFFSET\_FILL](input._internal_.WebGLRenderingContext.md#polygon_offset_fill)
- [POLYGON\_OFFSET\_UNITS](input._internal_.WebGLRenderingContext.md#polygon_offset_units)
- [RED\_BITS](input._internal_.WebGLRenderingContext.md#red_bits)
- [RENDERBUFFER](input._internal_.WebGLRenderingContext.md#renderbuffer)
- [RENDERBUFFER\_ALPHA\_SIZE](input._internal_.WebGLRenderingContext.md#renderbuffer_alpha_size)
- [RENDERBUFFER\_BINDING](input._internal_.WebGLRenderingContext.md#renderbuffer_binding)
- [RENDERBUFFER\_BLUE\_SIZE](input._internal_.WebGLRenderingContext.md#renderbuffer_blue_size)
- [RENDERBUFFER\_DEPTH\_SIZE](input._internal_.WebGLRenderingContext.md#renderbuffer_depth_size)
- [RENDERBUFFER\_GREEN\_SIZE](input._internal_.WebGLRenderingContext.md#renderbuffer_green_size)
- [RENDERBUFFER\_HEIGHT](input._internal_.WebGLRenderingContext.md#renderbuffer_height)
- [RENDERBUFFER\_INTERNAL\_FORMAT](input._internal_.WebGLRenderingContext.md#renderbuffer_internal_format)
- [RENDERBUFFER\_RED\_SIZE](input._internal_.WebGLRenderingContext.md#renderbuffer_red_size)
- [RENDERBUFFER\_STENCIL\_SIZE](input._internal_.WebGLRenderingContext.md#renderbuffer_stencil_size)
- [RENDERBUFFER\_WIDTH](input._internal_.WebGLRenderingContext.md#renderbuffer_width)
- [RENDERER](input._internal_.WebGLRenderingContext.md#renderer)
- [REPEAT](input._internal_.WebGLRenderingContext.md#repeat)
- [REPLACE](input._internal_.WebGLRenderingContext.md#replace)
- [RGB](input._internal_.WebGLRenderingContext.md#rgb)
- [RGB565](input._internal_.WebGLRenderingContext.md#rgb565)
- [RGB5\_A1](input._internal_.WebGLRenderingContext.md#rgb5_a1)
- [RGBA](input._internal_.WebGLRenderingContext.md#rgba)
- [RGBA4](input._internal_.WebGLRenderingContext.md#rgba4)
- [SAMPLER\_2D](input._internal_.WebGLRenderingContext.md#sampler_2d)
- [SAMPLER\_CUBE](input._internal_.WebGLRenderingContext.md#sampler_cube)
- [SAMPLES](input._internal_.WebGLRenderingContext.md#samples)
- [SAMPLE\_ALPHA\_TO\_COVERAGE](input._internal_.WebGLRenderingContext.md#sample_alpha_to_coverage)
- [SAMPLE\_BUFFERS](input._internal_.WebGLRenderingContext.md#sample_buffers)
- [SAMPLE\_COVERAGE](input._internal_.WebGLRenderingContext.md#sample_coverage)
- [SAMPLE\_COVERAGE\_INVERT](input._internal_.WebGLRenderingContext.md#sample_coverage_invert)
- [SAMPLE\_COVERAGE\_VALUE](input._internal_.WebGLRenderingContext.md#sample_coverage_value)
- [SCISSOR\_BOX](input._internal_.WebGLRenderingContext.md#scissor_box)
- [SCISSOR\_TEST](input._internal_.WebGLRenderingContext.md#scissor_test)
- [SHADER\_TYPE](input._internal_.WebGLRenderingContext.md#shader_type)
- [SHADING\_LANGUAGE\_VERSION](input._internal_.WebGLRenderingContext.md#shading_language_version)
- [SHORT](input._internal_.WebGLRenderingContext.md#short)
- [SRC\_ALPHA](input._internal_.WebGLRenderingContext.md#src_alpha)
- [SRC\_ALPHA\_SATURATE](input._internal_.WebGLRenderingContext.md#src_alpha_saturate)
- [SRC\_COLOR](input._internal_.WebGLRenderingContext.md#src_color)
- [STATIC\_DRAW](input._internal_.WebGLRenderingContext.md#static_draw)
- [STENCIL\_ATTACHMENT](input._internal_.WebGLRenderingContext.md#stencil_attachment)
- [STENCIL\_BACK\_FAIL](input._internal_.WebGLRenderingContext.md#stencil_back_fail)
- [STENCIL\_BACK\_FUNC](input._internal_.WebGLRenderingContext.md#stencil_back_func)
- [STENCIL\_BACK\_PASS\_DEPTH\_FAIL](input._internal_.WebGLRenderingContext.md#stencil_back_pass_depth_fail)
- [STENCIL\_BACK\_PASS\_DEPTH\_PASS](input._internal_.WebGLRenderingContext.md#stencil_back_pass_depth_pass)
- [STENCIL\_BACK\_REF](input._internal_.WebGLRenderingContext.md#stencil_back_ref)
- [STENCIL\_BACK\_VALUE\_MASK](input._internal_.WebGLRenderingContext.md#stencil_back_value_mask)
- [STENCIL\_BACK\_WRITEMASK](input._internal_.WebGLRenderingContext.md#stencil_back_writemask)
- [STENCIL\_BITS](input._internal_.WebGLRenderingContext.md#stencil_bits)
- [STENCIL\_BUFFER\_BIT](input._internal_.WebGLRenderingContext.md#stencil_buffer_bit)
- [STENCIL\_CLEAR\_VALUE](input._internal_.WebGLRenderingContext.md#stencil_clear_value)
- [STENCIL\_FAIL](input._internal_.WebGLRenderingContext.md#stencil_fail)
- [STENCIL\_FUNC](input._internal_.WebGLRenderingContext.md#stencil_func)
- [STENCIL\_INDEX8](input._internal_.WebGLRenderingContext.md#stencil_index8)
- [STENCIL\_PASS\_DEPTH\_FAIL](input._internal_.WebGLRenderingContext.md#stencil_pass_depth_fail)
- [STENCIL\_PASS\_DEPTH\_PASS](input._internal_.WebGLRenderingContext.md#stencil_pass_depth_pass)
- [STENCIL\_REF](input._internal_.WebGLRenderingContext.md#stencil_ref)
- [STENCIL\_TEST](input._internal_.WebGLRenderingContext.md#stencil_test)
- [STENCIL\_VALUE\_MASK](input._internal_.WebGLRenderingContext.md#stencil_value_mask)
- [STENCIL\_WRITEMASK](input._internal_.WebGLRenderingContext.md#stencil_writemask)
- [STREAM\_DRAW](input._internal_.WebGLRenderingContext.md#stream_draw)
- [SUBPIXEL\_BITS](input._internal_.WebGLRenderingContext.md#subpixel_bits)
- [TEXTURE](input._internal_.WebGLRenderingContext.md#texture)
- [TEXTURE0](input._internal_.WebGLRenderingContext.md#texture0)
- [TEXTURE1](input._internal_.WebGLRenderingContext.md#texture1)
- [TEXTURE10](input._internal_.WebGLRenderingContext.md#texture10)
- [TEXTURE11](input._internal_.WebGLRenderingContext.md#texture11)
- [TEXTURE12](input._internal_.WebGLRenderingContext.md#texture12)
- [TEXTURE13](input._internal_.WebGLRenderingContext.md#texture13)
- [TEXTURE14](input._internal_.WebGLRenderingContext.md#texture14)
- [TEXTURE15](input._internal_.WebGLRenderingContext.md#texture15)
- [TEXTURE16](input._internal_.WebGLRenderingContext.md#texture16)
- [TEXTURE17](input._internal_.WebGLRenderingContext.md#texture17)
- [TEXTURE18](input._internal_.WebGLRenderingContext.md#texture18)
- [TEXTURE19](input._internal_.WebGLRenderingContext.md#texture19)
- [TEXTURE2](input._internal_.WebGLRenderingContext.md#texture2)
- [TEXTURE20](input._internal_.WebGLRenderingContext.md#texture20)
- [TEXTURE21](input._internal_.WebGLRenderingContext.md#texture21)
- [TEXTURE22](input._internal_.WebGLRenderingContext.md#texture22)
- [TEXTURE23](input._internal_.WebGLRenderingContext.md#texture23)
- [TEXTURE24](input._internal_.WebGLRenderingContext.md#texture24)
- [TEXTURE25](input._internal_.WebGLRenderingContext.md#texture25)
- [TEXTURE26](input._internal_.WebGLRenderingContext.md#texture26)
- [TEXTURE27](input._internal_.WebGLRenderingContext.md#texture27)
- [TEXTURE28](input._internal_.WebGLRenderingContext.md#texture28)
- [TEXTURE29](input._internal_.WebGLRenderingContext.md#texture29)
- [TEXTURE3](input._internal_.WebGLRenderingContext.md#texture3)
- [TEXTURE30](input._internal_.WebGLRenderingContext.md#texture30)
- [TEXTURE31](input._internal_.WebGLRenderingContext.md#texture31)
- [TEXTURE4](input._internal_.WebGLRenderingContext.md#texture4)
- [TEXTURE5](input._internal_.WebGLRenderingContext.md#texture5)
- [TEXTURE6](input._internal_.WebGLRenderingContext.md#texture6)
- [TEXTURE7](input._internal_.WebGLRenderingContext.md#texture7)
- [TEXTURE8](input._internal_.WebGLRenderingContext.md#texture8)
- [TEXTURE9](input._internal_.WebGLRenderingContext.md#texture9)
- [TEXTURE\_2D](input._internal_.WebGLRenderingContext.md#texture_2d)
- [TEXTURE\_BINDING\_2D](input._internal_.WebGLRenderingContext.md#texture_binding_2d)
- [TEXTURE\_BINDING\_CUBE\_MAP](input._internal_.WebGLRenderingContext.md#texture_binding_cube_map)
- [TEXTURE\_CUBE\_MAP](input._internal_.WebGLRenderingContext.md#texture_cube_map)
- [TEXTURE\_CUBE\_MAP\_NEGATIVE\_X](input._internal_.WebGLRenderingContext.md#texture_cube_map_negative_x)
- [TEXTURE\_CUBE\_MAP\_NEGATIVE\_Y](input._internal_.WebGLRenderingContext.md#texture_cube_map_negative_y)
- [TEXTURE\_CUBE\_MAP\_NEGATIVE\_Z](input._internal_.WebGLRenderingContext.md#texture_cube_map_negative_z)
- [TEXTURE\_CUBE\_MAP\_POSITIVE\_X](input._internal_.WebGLRenderingContext.md#texture_cube_map_positive_x)
- [TEXTURE\_CUBE\_MAP\_POSITIVE\_Y](input._internal_.WebGLRenderingContext.md#texture_cube_map_positive_y)
- [TEXTURE\_CUBE\_MAP\_POSITIVE\_Z](input._internal_.WebGLRenderingContext.md#texture_cube_map_positive_z)
- [TEXTURE\_MAG\_FILTER](input._internal_.WebGLRenderingContext.md#texture_mag_filter)
- [TEXTURE\_MIN\_FILTER](input._internal_.WebGLRenderingContext.md#texture_min_filter)
- [TEXTURE\_WRAP\_S](input._internal_.WebGLRenderingContext.md#texture_wrap_s)
- [TEXTURE\_WRAP\_T](input._internal_.WebGLRenderingContext.md#texture_wrap_t)
- [TRIANGLES](input._internal_.WebGLRenderingContext.md#triangles)
- [TRIANGLE\_FAN](input._internal_.WebGLRenderingContext.md#triangle_fan)
- [TRIANGLE\_STRIP](input._internal_.WebGLRenderingContext.md#triangle_strip)
- [UNPACK\_ALIGNMENT](input._internal_.WebGLRenderingContext.md#unpack_alignment)
- [UNPACK\_COLORSPACE\_CONVERSION\_WEBGL](input._internal_.WebGLRenderingContext.md#unpack_colorspace_conversion_webgl)
- [UNPACK\_FLIP\_Y\_WEBGL](input._internal_.WebGLRenderingContext.md#unpack_flip_y_webgl)
- [UNPACK\_PREMULTIPLY\_ALPHA\_WEBGL](input._internal_.WebGLRenderingContext.md#unpack_premultiply_alpha_webgl)
- [UNSIGNED\_BYTE](input._internal_.WebGLRenderingContext.md#unsigned_byte)
- [UNSIGNED\_INT](input._internal_.WebGLRenderingContext.md#unsigned_int)
- [UNSIGNED\_SHORT](input._internal_.WebGLRenderingContext.md#unsigned_short)
- [UNSIGNED\_SHORT\_4\_4\_4\_4](input._internal_.WebGLRenderingContext.md#unsigned_short_4_4_4_4)
- [UNSIGNED\_SHORT\_5\_5\_5\_1](input._internal_.WebGLRenderingContext.md#unsigned_short_5_5_5_1)
- [UNSIGNED\_SHORT\_5\_6\_5](input._internal_.WebGLRenderingContext.md#unsigned_short_5_6_5)
- [VALIDATE\_STATUS](input._internal_.WebGLRenderingContext.md#validate_status)
- [VENDOR](input._internal_.WebGLRenderingContext.md#vendor)
- [VERSION](input._internal_.WebGLRenderingContext.md#version)
- [VERTEX\_ATTRIB\_ARRAY\_BUFFER\_BINDING](input._internal_.WebGLRenderingContext.md#vertex_attrib_array_buffer_binding)
- [VERTEX\_ATTRIB\_ARRAY\_ENABLED](input._internal_.WebGLRenderingContext.md#vertex_attrib_array_enabled)
- [VERTEX\_ATTRIB\_ARRAY\_NORMALIZED](input._internal_.WebGLRenderingContext.md#vertex_attrib_array_normalized)
- [VERTEX\_ATTRIB\_ARRAY\_POINTER](input._internal_.WebGLRenderingContext.md#vertex_attrib_array_pointer)
- [VERTEX\_ATTRIB\_ARRAY\_SIZE](input._internal_.WebGLRenderingContext.md#vertex_attrib_array_size)
- [VERTEX\_ATTRIB\_ARRAY\_STRIDE](input._internal_.WebGLRenderingContext.md#vertex_attrib_array_stride)
- [VERTEX\_ATTRIB\_ARRAY\_TYPE](input._internal_.WebGLRenderingContext.md#vertex_attrib_array_type)
- [VERTEX\_SHADER](input._internal_.WebGLRenderingContext.md#vertex_shader)
- [VIEWPORT](input._internal_.WebGLRenderingContext.md#viewport)
- [ZERO](input._internal_.WebGLRenderingContext.md#zero)
- [canvas](input._internal_.WebGLRenderingContext.md#canvas)
- [drawingBufferHeight](input._internal_.WebGLRenderingContext.md#drawingbufferheight)
- [drawingBufferWidth](input._internal_.WebGLRenderingContext.md#drawingbufferwidth)

### Methods

- [activeTexture](input._internal_.WebGLRenderingContext.md#activetexture)
- [attachShader](input._internal_.WebGLRenderingContext.md#attachshader)
- [bindAttribLocation](input._internal_.WebGLRenderingContext.md#bindattriblocation)
- [bindBuffer](input._internal_.WebGLRenderingContext.md#bindbuffer)
- [bindFramebuffer](input._internal_.WebGLRenderingContext.md#bindframebuffer)
- [bindRenderbuffer](input._internal_.WebGLRenderingContext.md#bindrenderbuffer)
- [bindTexture](input._internal_.WebGLRenderingContext.md#bindtexture)
- [blendColor](input._internal_.WebGLRenderingContext.md#blendcolor)
- [blendEquation](input._internal_.WebGLRenderingContext.md#blendequation)
- [blendEquationSeparate](input._internal_.WebGLRenderingContext.md#blendequationseparate)
- [blendFunc](input._internal_.WebGLRenderingContext.md#blendfunc)
- [blendFuncSeparate](input._internal_.WebGLRenderingContext.md#blendfuncseparate)
- [bufferData](input._internal_.WebGLRenderingContext.md#bufferdata)
- [bufferSubData](input._internal_.WebGLRenderingContext.md#buffersubdata)
- [checkFramebufferStatus](input._internal_.WebGLRenderingContext.md#checkframebufferstatus)
- [clear](input._internal_.WebGLRenderingContext.md#clear)
- [clearColor](input._internal_.WebGLRenderingContext.md#clearcolor)
- [clearDepth](input._internal_.WebGLRenderingContext.md#cleardepth)
- [clearStencil](input._internal_.WebGLRenderingContext.md#clearstencil)
- [colorMask](input._internal_.WebGLRenderingContext.md#colormask)
- [compileShader](input._internal_.WebGLRenderingContext.md#compileshader)
- [compressedTexImage2D](input._internal_.WebGLRenderingContext.md#compressedteximage2d)
- [compressedTexSubImage2D](input._internal_.WebGLRenderingContext.md#compressedtexsubimage2d)
- [copyTexImage2D](input._internal_.WebGLRenderingContext.md#copyteximage2d)
- [copyTexSubImage2D](input._internal_.WebGLRenderingContext.md#copytexsubimage2d)
- [createBuffer](input._internal_.WebGLRenderingContext.md#createbuffer)
- [createFramebuffer](input._internal_.WebGLRenderingContext.md#createframebuffer)
- [createProgram](input._internal_.WebGLRenderingContext.md#createprogram)
- [createRenderbuffer](input._internal_.WebGLRenderingContext.md#createrenderbuffer)
- [createShader](input._internal_.WebGLRenderingContext.md#createshader)
- [createTexture](input._internal_.WebGLRenderingContext.md#createtexture)
- [cullFace](input._internal_.WebGLRenderingContext.md#cullface)
- [deleteBuffer](input._internal_.WebGLRenderingContext.md#deletebuffer)
- [deleteFramebuffer](input._internal_.WebGLRenderingContext.md#deleteframebuffer)
- [deleteProgram](input._internal_.WebGLRenderingContext.md#deleteprogram)
- [deleteRenderbuffer](input._internal_.WebGLRenderingContext.md#deleterenderbuffer)
- [deleteShader](input._internal_.WebGLRenderingContext.md#deleteshader)
- [deleteTexture](input._internal_.WebGLRenderingContext.md#deletetexture)
- [depthFunc](input._internal_.WebGLRenderingContext.md#depthfunc)
- [depthMask](input._internal_.WebGLRenderingContext.md#depthmask)
- [depthRange](input._internal_.WebGLRenderingContext.md#depthrange)
- [detachShader](input._internal_.WebGLRenderingContext.md#detachshader)
- [disable](input._internal_.WebGLRenderingContext.md#disable)
- [disableVertexAttribArray](input._internal_.WebGLRenderingContext.md#disablevertexattribarray)
- [drawArrays](input._internal_.WebGLRenderingContext.md#drawarrays)
- [drawElements](input._internal_.WebGLRenderingContext.md#drawelements)
- [enable](input._internal_.WebGLRenderingContext.md#enable)
- [enableVertexAttribArray](input._internal_.WebGLRenderingContext.md#enablevertexattribarray)
- [finish](input._internal_.WebGLRenderingContext.md#finish)
- [flush](input._internal_.WebGLRenderingContext.md#flush)
- [framebufferRenderbuffer](input._internal_.WebGLRenderingContext.md#framebufferrenderbuffer)
- [framebufferTexture2D](input._internal_.WebGLRenderingContext.md#framebuffertexture2d)
- [frontFace](input._internal_.WebGLRenderingContext.md#frontface)
- [generateMipmap](input._internal_.WebGLRenderingContext.md#generatemipmap)
- [getActiveAttrib](input._internal_.WebGLRenderingContext.md#getactiveattrib)
- [getActiveUniform](input._internal_.WebGLRenderingContext.md#getactiveuniform)
- [getAttachedShaders](input._internal_.WebGLRenderingContext.md#getattachedshaders)
- [getAttribLocation](input._internal_.WebGLRenderingContext.md#getattriblocation)
- [getBufferParameter](input._internal_.WebGLRenderingContext.md#getbufferparameter)
- [getContextAttributes](input._internal_.WebGLRenderingContext.md#getcontextattributes)
- [getError](input._internal_.WebGLRenderingContext.md#geterror)
- [getExtension](input._internal_.WebGLRenderingContext.md#getextension)
- [getFramebufferAttachmentParameter](input._internal_.WebGLRenderingContext.md#getframebufferattachmentparameter)
- [getParameter](input._internal_.WebGLRenderingContext.md#getparameter)
- [getProgramInfoLog](input._internal_.WebGLRenderingContext.md#getprograminfolog)
- [getProgramParameter](input._internal_.WebGLRenderingContext.md#getprogramparameter)
- [getRenderbufferParameter](input._internal_.WebGLRenderingContext.md#getrenderbufferparameter)
- [getShaderInfoLog](input._internal_.WebGLRenderingContext.md#getshaderinfolog)
- [getShaderParameter](input._internal_.WebGLRenderingContext.md#getshaderparameter)
- [getShaderPrecisionFormat](input._internal_.WebGLRenderingContext.md#getshaderprecisionformat)
- [getShaderSource](input._internal_.WebGLRenderingContext.md#getshadersource)
- [getSupportedExtensions](input._internal_.WebGLRenderingContext.md#getsupportedextensions)
- [getTexParameter](input._internal_.WebGLRenderingContext.md#gettexparameter)
- [getUniform](input._internal_.WebGLRenderingContext.md#getuniform)
- [getUniformLocation](input._internal_.WebGLRenderingContext.md#getuniformlocation)
- [getVertexAttrib](input._internal_.WebGLRenderingContext.md#getvertexattrib)
- [getVertexAttribOffset](input._internal_.WebGLRenderingContext.md#getvertexattriboffset)
- [hint](input._internal_.WebGLRenderingContext.md#hint)
- [isBuffer](input._internal_.WebGLRenderingContext.md#isbuffer)
- [isContextLost](input._internal_.WebGLRenderingContext.md#iscontextlost)
- [isEnabled](input._internal_.WebGLRenderingContext.md#isenabled)
- [isFramebuffer](input._internal_.WebGLRenderingContext.md#isframebuffer)
- [isProgram](input._internal_.WebGLRenderingContext.md#isprogram)
- [isRenderbuffer](input._internal_.WebGLRenderingContext.md#isrenderbuffer)
- [isShader](input._internal_.WebGLRenderingContext.md#isshader)
- [isTexture](input._internal_.WebGLRenderingContext.md#istexture)
- [lineWidth](input._internal_.WebGLRenderingContext.md#linewidth)
- [linkProgram](input._internal_.WebGLRenderingContext.md#linkprogram)
- [pixelStorei](input._internal_.WebGLRenderingContext.md#pixelstorei)
- [polygonOffset](input._internal_.WebGLRenderingContext.md#polygonoffset)
- [readPixels](input._internal_.WebGLRenderingContext.md#readpixels)
- [renderbufferStorage](input._internal_.WebGLRenderingContext.md#renderbufferstorage)
- [sampleCoverage](input._internal_.WebGLRenderingContext.md#samplecoverage)
- [scissor](input._internal_.WebGLRenderingContext.md#scissor)
- [shaderSource](input._internal_.WebGLRenderingContext.md#shadersource)
- [stencilFunc](input._internal_.WebGLRenderingContext.md#stencilfunc)
- [stencilFuncSeparate](input._internal_.WebGLRenderingContext.md#stencilfuncseparate)
- [stencilMask](input._internal_.WebGLRenderingContext.md#stencilmask)
- [stencilMaskSeparate](input._internal_.WebGLRenderingContext.md#stencilmaskseparate)
- [stencilOp](input._internal_.WebGLRenderingContext.md#stencilop)
- [stencilOpSeparate](input._internal_.WebGLRenderingContext.md#stencilopseparate)
- [texImage2D](input._internal_.WebGLRenderingContext.md#teximage2d)
- [texParameterf](input._internal_.WebGLRenderingContext.md#texparameterf)
- [texParameteri](input._internal_.WebGLRenderingContext.md#texparameteri)
- [texSubImage2D](input._internal_.WebGLRenderingContext.md#texsubimage2d)
- [uniform1f](input._internal_.WebGLRenderingContext.md#uniform1f)
- [uniform1fv](input._internal_.WebGLRenderingContext.md#uniform1fv)
- [uniform1i](input._internal_.WebGLRenderingContext.md#uniform1i)
- [uniform1iv](input._internal_.WebGLRenderingContext.md#uniform1iv)
- [uniform2f](input._internal_.WebGLRenderingContext.md#uniform2f)
- [uniform2fv](input._internal_.WebGLRenderingContext.md#uniform2fv)
- [uniform2i](input._internal_.WebGLRenderingContext.md#uniform2i)
- [uniform2iv](input._internal_.WebGLRenderingContext.md#uniform2iv)
- [uniform3f](input._internal_.WebGLRenderingContext.md#uniform3f)
- [uniform3fv](input._internal_.WebGLRenderingContext.md#uniform3fv)
- [uniform3i](input._internal_.WebGLRenderingContext.md#uniform3i)
- [uniform3iv](input._internal_.WebGLRenderingContext.md#uniform3iv)
- [uniform4f](input._internal_.WebGLRenderingContext.md#uniform4f)
- [uniform4fv](input._internal_.WebGLRenderingContext.md#uniform4fv)
- [uniform4i](input._internal_.WebGLRenderingContext.md#uniform4i)
- [uniform4iv](input._internal_.WebGLRenderingContext.md#uniform4iv)
- [uniformMatrix2fv](input._internal_.WebGLRenderingContext.md#uniformmatrix2fv)
- [uniformMatrix3fv](input._internal_.WebGLRenderingContext.md#uniformmatrix3fv)
- [uniformMatrix4fv](input._internal_.WebGLRenderingContext.md#uniformmatrix4fv)
- [useProgram](input._internal_.WebGLRenderingContext.md#useprogram)
- [validateProgram](input._internal_.WebGLRenderingContext.md#validateprogram)
- [vertexAttrib1f](input._internal_.WebGLRenderingContext.md#vertexattrib1f)
- [vertexAttrib1fv](input._internal_.WebGLRenderingContext.md#vertexattrib1fv)
- [vertexAttrib2f](input._internal_.WebGLRenderingContext.md#vertexattrib2f)
- [vertexAttrib2fv](input._internal_.WebGLRenderingContext.md#vertexattrib2fv)
- [vertexAttrib3f](input._internal_.WebGLRenderingContext.md#vertexattrib3f)
- [vertexAttrib3fv](input._internal_.WebGLRenderingContext.md#vertexattrib3fv)
- [vertexAttrib4f](input._internal_.WebGLRenderingContext.md#vertexattrib4f)
- [vertexAttrib4fv](input._internal_.WebGLRenderingContext.md#vertexattrib4fv)
- [vertexAttribPointer](input._internal_.WebGLRenderingContext.md#vertexattribpointer)
- [viewport](input._internal_.WebGLRenderingContext.md#viewport-1)

## Properties

### ACTIVE\_ATTRIBUTES

• `Readonly` **ACTIVE\_ATTRIBUTES**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[ACTIVE_ATTRIBUTES](input._internal_.WebGLRenderingContextBase.md#active_attributes)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16137

___

### ACTIVE\_TEXTURE

• `Readonly` **ACTIVE\_TEXTURE**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[ACTIVE_TEXTURE](input._internal_.WebGLRenderingContextBase.md#active_texture)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16138

___

### ACTIVE\_UNIFORMS

• `Readonly` **ACTIVE\_UNIFORMS**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[ACTIVE_UNIFORMS](input._internal_.WebGLRenderingContextBase.md#active_uniforms)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16139

___

### ALIASED\_LINE\_WIDTH\_RANGE

• `Readonly` **ALIASED\_LINE\_WIDTH\_RANGE**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[ALIASED_LINE_WIDTH_RANGE](input._internal_.WebGLRenderingContextBase.md#aliased_line_width_range)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16140

___

### ALIASED\_POINT\_SIZE\_RANGE

• `Readonly` **ALIASED\_POINT\_SIZE\_RANGE**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[ALIASED_POINT_SIZE_RANGE](input._internal_.WebGLRenderingContextBase.md#aliased_point_size_range)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16141

___

### ALPHA

• `Readonly` **ALPHA**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[ALPHA](input._internal_.WebGLRenderingContextBase.md#alpha)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16142

___

### ALPHA\_BITS

• `Readonly` **ALPHA\_BITS**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[ALPHA_BITS](input._internal_.WebGLRenderingContextBase.md#alpha_bits)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16143

___

### ALWAYS

• `Readonly` **ALWAYS**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[ALWAYS](input._internal_.WebGLRenderingContextBase.md#always)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16144

___

### ARRAY\_BUFFER

• `Readonly` **ARRAY\_BUFFER**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[ARRAY_BUFFER](input._internal_.WebGLRenderingContextBase.md#array_buffer)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16145

___

### ARRAY\_BUFFER\_BINDING

• `Readonly` **ARRAY\_BUFFER\_BINDING**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[ARRAY_BUFFER_BINDING](input._internal_.WebGLRenderingContextBase.md#array_buffer_binding)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16146

___

### ATTACHED\_SHADERS

• `Readonly` **ATTACHED\_SHADERS**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[ATTACHED_SHADERS](input._internal_.WebGLRenderingContextBase.md#attached_shaders)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16147

___

### BACK

• `Readonly` **BACK**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[BACK](input._internal_.WebGLRenderingContextBase.md#back)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16148

___

### BLEND

• `Readonly` **BLEND**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[BLEND](input._internal_.WebGLRenderingContextBase.md#blend)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16149

___

### BLEND\_COLOR

• `Readonly` **BLEND\_COLOR**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[BLEND_COLOR](input._internal_.WebGLRenderingContextBase.md#blend_color)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16150

___

### BLEND\_DST\_ALPHA

• `Readonly` **BLEND\_DST\_ALPHA**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[BLEND_DST_ALPHA](input._internal_.WebGLRenderingContextBase.md#blend_dst_alpha)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16151

___

### BLEND\_DST\_RGB

• `Readonly` **BLEND\_DST\_RGB**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[BLEND_DST_RGB](input._internal_.WebGLRenderingContextBase.md#blend_dst_rgb)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16152

___

### BLEND\_EQUATION

• `Readonly` **BLEND\_EQUATION**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[BLEND_EQUATION](input._internal_.WebGLRenderingContextBase.md#blend_equation)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16153

___

### BLEND\_EQUATION\_ALPHA

• `Readonly` **BLEND\_EQUATION\_ALPHA**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[BLEND_EQUATION_ALPHA](input._internal_.WebGLRenderingContextBase.md#blend_equation_alpha)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16154

___

### BLEND\_EQUATION\_RGB

• `Readonly` **BLEND\_EQUATION\_RGB**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[BLEND_EQUATION_RGB](input._internal_.WebGLRenderingContextBase.md#blend_equation_rgb)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16155

___

### BLEND\_SRC\_ALPHA

• `Readonly` **BLEND\_SRC\_ALPHA**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[BLEND_SRC_ALPHA](input._internal_.WebGLRenderingContextBase.md#blend_src_alpha)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16156

___

### BLEND\_SRC\_RGB

• `Readonly` **BLEND\_SRC\_RGB**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[BLEND_SRC_RGB](input._internal_.WebGLRenderingContextBase.md#blend_src_rgb)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16157

___

### BLUE\_BITS

• `Readonly` **BLUE\_BITS**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[BLUE_BITS](input._internal_.WebGLRenderingContextBase.md#blue_bits)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16158

___

### BOOL

• `Readonly` **BOOL**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[BOOL](input._internal_.WebGLRenderingContextBase.md#bool)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16159

___

### BOOL\_VEC2

• `Readonly` **BOOL\_VEC2**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[BOOL_VEC2](input._internal_.WebGLRenderingContextBase.md#bool_vec2)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16160

___

### BOOL\_VEC3

• `Readonly` **BOOL\_VEC3**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[BOOL_VEC3](input._internal_.WebGLRenderingContextBase.md#bool_vec3)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16161

___

### BOOL\_VEC4

• `Readonly` **BOOL\_VEC4**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[BOOL_VEC4](input._internal_.WebGLRenderingContextBase.md#bool_vec4)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16162

___

### BROWSER\_DEFAULT\_WEBGL

• `Readonly` **BROWSER\_DEFAULT\_WEBGL**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[BROWSER_DEFAULT_WEBGL](input._internal_.WebGLRenderingContextBase.md#browser_default_webgl)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16163

___

### BUFFER\_SIZE

• `Readonly` **BUFFER\_SIZE**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[BUFFER_SIZE](input._internal_.WebGLRenderingContextBase.md#buffer_size)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16164

___

### BUFFER\_USAGE

• `Readonly` **BUFFER\_USAGE**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[BUFFER_USAGE](input._internal_.WebGLRenderingContextBase.md#buffer_usage)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16165

___

### BYTE

• `Readonly` **BYTE**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[BYTE](input._internal_.WebGLRenderingContextBase.md#byte)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16166

___

### CCW

• `Readonly` **CCW**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[CCW](input._internal_.WebGLRenderingContextBase.md#ccw)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16167

___

### CLAMP\_TO\_EDGE

• `Readonly` **CLAMP\_TO\_EDGE**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[CLAMP_TO_EDGE](input._internal_.WebGLRenderingContextBase.md#clamp_to_edge)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16168

___

### COLOR\_ATTACHMENT0

• `Readonly` **COLOR\_ATTACHMENT0**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[COLOR_ATTACHMENT0](input._internal_.WebGLRenderingContextBase.md#color_attachment0)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16169

___

### COLOR\_BUFFER\_BIT

• `Readonly` **COLOR\_BUFFER\_BIT**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[COLOR_BUFFER_BIT](input._internal_.WebGLRenderingContextBase.md#color_buffer_bit)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16170

___

### COLOR\_CLEAR\_VALUE

• `Readonly` **COLOR\_CLEAR\_VALUE**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[COLOR_CLEAR_VALUE](input._internal_.WebGLRenderingContextBase.md#color_clear_value)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16171

___

### COLOR\_WRITEMASK

• `Readonly` **COLOR\_WRITEMASK**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[COLOR_WRITEMASK](input._internal_.WebGLRenderingContextBase.md#color_writemask)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16172

___

### COMPILE\_STATUS

• `Readonly` **COMPILE\_STATUS**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[COMPILE_STATUS](input._internal_.WebGLRenderingContextBase.md#compile_status)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16173

___

### COMPRESSED\_TEXTURE\_FORMATS

• `Readonly` **COMPRESSED\_TEXTURE\_FORMATS**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[COMPRESSED_TEXTURE_FORMATS](input._internal_.WebGLRenderingContextBase.md#compressed_texture_formats)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16174

___

### CONSTANT\_ALPHA

• `Readonly` **CONSTANT\_ALPHA**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[CONSTANT_ALPHA](input._internal_.WebGLRenderingContextBase.md#constant_alpha)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16175

___

### CONSTANT\_COLOR

• `Readonly` **CONSTANT\_COLOR**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[CONSTANT_COLOR](input._internal_.WebGLRenderingContextBase.md#constant_color)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16176

___

### CONTEXT\_LOST\_WEBGL

• `Readonly` **CONTEXT\_LOST\_WEBGL**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[CONTEXT_LOST_WEBGL](input._internal_.WebGLRenderingContextBase.md#context_lost_webgl)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16177

___

### CULL\_FACE

• `Readonly` **CULL\_FACE**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[CULL_FACE](input._internal_.WebGLRenderingContextBase.md#cull_face)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16178

___

### CULL\_FACE\_MODE

• `Readonly` **CULL\_FACE\_MODE**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[CULL_FACE_MODE](input._internal_.WebGLRenderingContextBase.md#cull_face_mode)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16179

___

### CURRENT\_PROGRAM

• `Readonly` **CURRENT\_PROGRAM**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[CURRENT_PROGRAM](input._internal_.WebGLRenderingContextBase.md#current_program)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16180

___

### CURRENT\_VERTEX\_ATTRIB

• `Readonly` **CURRENT\_VERTEX\_ATTRIB**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[CURRENT_VERTEX_ATTRIB](input._internal_.WebGLRenderingContextBase.md#current_vertex_attrib)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16181

___

### CW

• `Readonly` **CW**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[CW](input._internal_.WebGLRenderingContextBase.md#cw)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16182

___

### DECR

• `Readonly` **DECR**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[DECR](input._internal_.WebGLRenderingContextBase.md#decr)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16183

___

### DECR\_WRAP

• `Readonly` **DECR\_WRAP**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[DECR_WRAP](input._internal_.WebGLRenderingContextBase.md#decr_wrap)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16184

___

### DELETE\_STATUS

• `Readonly` **DELETE\_STATUS**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[DELETE_STATUS](input._internal_.WebGLRenderingContextBase.md#delete_status)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16185

___

### DEPTH\_ATTACHMENT

• `Readonly` **DEPTH\_ATTACHMENT**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[DEPTH_ATTACHMENT](input._internal_.WebGLRenderingContextBase.md#depth_attachment)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16186

___

### DEPTH\_BITS

• `Readonly` **DEPTH\_BITS**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[DEPTH_BITS](input._internal_.WebGLRenderingContextBase.md#depth_bits)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16187

___

### DEPTH\_BUFFER\_BIT

• `Readonly` **DEPTH\_BUFFER\_BIT**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[DEPTH_BUFFER_BIT](input._internal_.WebGLRenderingContextBase.md#depth_buffer_bit)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16188

___

### DEPTH\_CLEAR\_VALUE

• `Readonly` **DEPTH\_CLEAR\_VALUE**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[DEPTH_CLEAR_VALUE](input._internal_.WebGLRenderingContextBase.md#depth_clear_value)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16189

___

### DEPTH\_COMPONENT

• `Readonly` **DEPTH\_COMPONENT**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[DEPTH_COMPONENT](input._internal_.WebGLRenderingContextBase.md#depth_component)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16190

___

### DEPTH\_COMPONENT16

• `Readonly` **DEPTH\_COMPONENT16**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[DEPTH_COMPONENT16](input._internal_.WebGLRenderingContextBase.md#depth_component16)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16191

___

### DEPTH\_FUNC

• `Readonly` **DEPTH\_FUNC**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[DEPTH_FUNC](input._internal_.WebGLRenderingContextBase.md#depth_func)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16192

___

### DEPTH\_RANGE

• `Readonly` **DEPTH\_RANGE**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[DEPTH_RANGE](input._internal_.WebGLRenderingContextBase.md#depth_range)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16193

___

### DEPTH\_STENCIL

• `Readonly` **DEPTH\_STENCIL**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[DEPTH_STENCIL](input._internal_.WebGLRenderingContextBase.md#depth_stencil)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16194

___

### DEPTH\_STENCIL\_ATTACHMENT

• `Readonly` **DEPTH\_STENCIL\_ATTACHMENT**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[DEPTH_STENCIL_ATTACHMENT](input._internal_.WebGLRenderingContextBase.md#depth_stencil_attachment)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16195

___

### DEPTH\_TEST

• `Readonly` **DEPTH\_TEST**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[DEPTH_TEST](input._internal_.WebGLRenderingContextBase.md#depth_test)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16196

___

### DEPTH\_WRITEMASK

• `Readonly` **DEPTH\_WRITEMASK**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[DEPTH_WRITEMASK](input._internal_.WebGLRenderingContextBase.md#depth_writemask)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16197

___

### DITHER

• `Readonly` **DITHER**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[DITHER](input._internal_.WebGLRenderingContextBase.md#dither)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16198

___

### DONT\_CARE

• `Readonly` **DONT\_CARE**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[DONT_CARE](input._internal_.WebGLRenderingContextBase.md#dont_care)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16199

___

### DST\_ALPHA

• `Readonly` **DST\_ALPHA**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[DST_ALPHA](input._internal_.WebGLRenderingContextBase.md#dst_alpha)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16200

___

### DST\_COLOR

• `Readonly` **DST\_COLOR**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[DST_COLOR](input._internal_.WebGLRenderingContextBase.md#dst_color)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16201

___

### DYNAMIC\_DRAW

• `Readonly` **DYNAMIC\_DRAW**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[DYNAMIC_DRAW](input._internal_.WebGLRenderingContextBase.md#dynamic_draw)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16202

___

### ELEMENT\_ARRAY\_BUFFER

• `Readonly` **ELEMENT\_ARRAY\_BUFFER**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[ELEMENT_ARRAY_BUFFER](input._internal_.WebGLRenderingContextBase.md#element_array_buffer)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16203

___

### ELEMENT\_ARRAY\_BUFFER\_BINDING

• `Readonly` **ELEMENT\_ARRAY\_BUFFER\_BINDING**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[ELEMENT_ARRAY_BUFFER_BINDING](input._internal_.WebGLRenderingContextBase.md#element_array_buffer_binding)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16204

___

### EQUAL

• `Readonly` **EQUAL**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[EQUAL](input._internal_.WebGLRenderingContextBase.md#equal)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16205

___

### FASTEST

• `Readonly` **FASTEST**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[FASTEST](input._internal_.WebGLRenderingContextBase.md#fastest)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16206

___

### FLOAT

• `Readonly` **FLOAT**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[FLOAT](input._internal_.WebGLRenderingContextBase.md#float)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16207

___

### FLOAT\_MAT2

• `Readonly` **FLOAT\_MAT2**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[FLOAT_MAT2](input._internal_.WebGLRenderingContextBase.md#float_mat2)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16208

___

### FLOAT\_MAT3

• `Readonly` **FLOAT\_MAT3**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[FLOAT_MAT3](input._internal_.WebGLRenderingContextBase.md#float_mat3)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16209

___

### FLOAT\_MAT4

• `Readonly` **FLOAT\_MAT4**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[FLOAT_MAT4](input._internal_.WebGLRenderingContextBase.md#float_mat4)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16210

___

### FLOAT\_VEC2

• `Readonly` **FLOAT\_VEC2**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[FLOAT_VEC2](input._internal_.WebGLRenderingContextBase.md#float_vec2)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16211

___

### FLOAT\_VEC3

• `Readonly` **FLOAT\_VEC3**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[FLOAT_VEC3](input._internal_.WebGLRenderingContextBase.md#float_vec3)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16212

___

### FLOAT\_VEC4

• `Readonly` **FLOAT\_VEC4**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[FLOAT_VEC4](input._internal_.WebGLRenderingContextBase.md#float_vec4)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16213

___

### FRAGMENT\_SHADER

• `Readonly` **FRAGMENT\_SHADER**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[FRAGMENT_SHADER](input._internal_.WebGLRenderingContextBase.md#fragment_shader)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16214

___

### FRAMEBUFFER

• `Readonly` **FRAMEBUFFER**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[FRAMEBUFFER](input._internal_.WebGLRenderingContextBase.md#framebuffer)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16215

___

### FRAMEBUFFER\_ATTACHMENT\_OBJECT\_NAME

• `Readonly` **FRAMEBUFFER\_ATTACHMENT\_OBJECT\_NAME**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[FRAMEBUFFER_ATTACHMENT_OBJECT_NAME](input._internal_.WebGLRenderingContextBase.md#framebuffer_attachment_object_name)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16216

___

### FRAMEBUFFER\_ATTACHMENT\_OBJECT\_TYPE

• `Readonly` **FRAMEBUFFER\_ATTACHMENT\_OBJECT\_TYPE**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE](input._internal_.WebGLRenderingContextBase.md#framebuffer_attachment_object_type)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16217

___

### FRAMEBUFFER\_ATTACHMENT\_TEXTURE\_CUBE\_MAP\_FACE

• `Readonly` **FRAMEBUFFER\_ATTACHMENT\_TEXTURE\_CUBE\_MAP\_FACE**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE](input._internal_.WebGLRenderingContextBase.md#framebuffer_attachment_texture_cube_map_face)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16218

___

### FRAMEBUFFER\_ATTACHMENT\_TEXTURE\_LEVEL

• `Readonly` **FRAMEBUFFER\_ATTACHMENT\_TEXTURE\_LEVEL**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL](input._internal_.WebGLRenderingContextBase.md#framebuffer_attachment_texture_level)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16219

___

### FRAMEBUFFER\_BINDING

• `Readonly` **FRAMEBUFFER\_BINDING**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[FRAMEBUFFER_BINDING](input._internal_.WebGLRenderingContextBase.md#framebuffer_binding)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16220

___

### FRAMEBUFFER\_COMPLETE

• `Readonly` **FRAMEBUFFER\_COMPLETE**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[FRAMEBUFFER_COMPLETE](input._internal_.WebGLRenderingContextBase.md#framebuffer_complete)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16221

___

### FRAMEBUFFER\_INCOMPLETE\_ATTACHMENT

• `Readonly` **FRAMEBUFFER\_INCOMPLETE\_ATTACHMENT**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[FRAMEBUFFER_INCOMPLETE_ATTACHMENT](input._internal_.WebGLRenderingContextBase.md#framebuffer_incomplete_attachment)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16222

___

### FRAMEBUFFER\_INCOMPLETE\_DIMENSIONS

• `Readonly` **FRAMEBUFFER\_INCOMPLETE\_DIMENSIONS**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[FRAMEBUFFER_INCOMPLETE_DIMENSIONS](input._internal_.WebGLRenderingContextBase.md#framebuffer_incomplete_dimensions)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16223

___

### FRAMEBUFFER\_INCOMPLETE\_MISSING\_ATTACHMENT

• `Readonly` **FRAMEBUFFER\_INCOMPLETE\_MISSING\_ATTACHMENT**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT](input._internal_.WebGLRenderingContextBase.md#framebuffer_incomplete_missing_attachment)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16224

___

### FRAMEBUFFER\_UNSUPPORTED

• `Readonly` **FRAMEBUFFER\_UNSUPPORTED**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[FRAMEBUFFER_UNSUPPORTED](input._internal_.WebGLRenderingContextBase.md#framebuffer_unsupported)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16225

___

### FRONT

• `Readonly` **FRONT**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[FRONT](input._internal_.WebGLRenderingContextBase.md#front)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16226

___

### FRONT\_AND\_BACK

• `Readonly` **FRONT\_AND\_BACK**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[FRONT_AND_BACK](input._internal_.WebGLRenderingContextBase.md#front_and_back)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16227

___

### FRONT\_FACE

• `Readonly` **FRONT\_FACE**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[FRONT_FACE](input._internal_.WebGLRenderingContextBase.md#front_face)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16228

___

### FUNC\_ADD

• `Readonly` **FUNC\_ADD**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[FUNC_ADD](input._internal_.WebGLRenderingContextBase.md#func_add)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16229

___

### FUNC\_REVERSE\_SUBTRACT

• `Readonly` **FUNC\_REVERSE\_SUBTRACT**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[FUNC_REVERSE_SUBTRACT](input._internal_.WebGLRenderingContextBase.md#func_reverse_subtract)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16230

___

### FUNC\_SUBTRACT

• `Readonly` **FUNC\_SUBTRACT**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[FUNC_SUBTRACT](input._internal_.WebGLRenderingContextBase.md#func_subtract)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16231

___

### GENERATE\_MIPMAP\_HINT

• `Readonly` **GENERATE\_MIPMAP\_HINT**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[GENERATE_MIPMAP_HINT](input._internal_.WebGLRenderingContextBase.md#generate_mipmap_hint)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16232

___

### GEQUAL

• `Readonly` **GEQUAL**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[GEQUAL](input._internal_.WebGLRenderingContextBase.md#gequal)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16233

___

### GREATER

• `Readonly` **GREATER**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[GREATER](input._internal_.WebGLRenderingContextBase.md#greater)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16234

___

### GREEN\_BITS

• `Readonly` **GREEN\_BITS**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[GREEN_BITS](input._internal_.WebGLRenderingContextBase.md#green_bits)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16235

___

### HIGH\_FLOAT

• `Readonly` **HIGH\_FLOAT**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[HIGH_FLOAT](input._internal_.WebGLRenderingContextBase.md#high_float)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16236

___

### HIGH\_INT

• `Readonly` **HIGH\_INT**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[HIGH_INT](input._internal_.WebGLRenderingContextBase.md#high_int)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16237

___

### IMPLEMENTATION\_COLOR\_READ\_FORMAT

• `Readonly` **IMPLEMENTATION\_COLOR\_READ\_FORMAT**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[IMPLEMENTATION_COLOR_READ_FORMAT](input._internal_.WebGLRenderingContextBase.md#implementation_color_read_format)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16238

___

### IMPLEMENTATION\_COLOR\_READ\_TYPE

• `Readonly` **IMPLEMENTATION\_COLOR\_READ\_TYPE**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[IMPLEMENTATION_COLOR_READ_TYPE](input._internal_.WebGLRenderingContextBase.md#implementation_color_read_type)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16239

___

### INCR

• `Readonly` **INCR**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[INCR](input._internal_.WebGLRenderingContextBase.md#incr)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16240

___

### INCR\_WRAP

• `Readonly` **INCR\_WRAP**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[INCR_WRAP](input._internal_.WebGLRenderingContextBase.md#incr_wrap)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16241

___

### INT

• `Readonly` **INT**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[INT](input._internal_.WebGLRenderingContextBase.md#int)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16242

___

### INT\_VEC2

• `Readonly` **INT\_VEC2**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[INT_VEC2](input._internal_.WebGLRenderingContextBase.md#int_vec2)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16243

___

### INT\_VEC3

• `Readonly` **INT\_VEC3**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[INT_VEC3](input._internal_.WebGLRenderingContextBase.md#int_vec3)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16244

___

### INT\_VEC4

• `Readonly` **INT\_VEC4**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[INT_VEC4](input._internal_.WebGLRenderingContextBase.md#int_vec4)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16245

___

### INVALID\_ENUM

• `Readonly` **INVALID\_ENUM**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[INVALID_ENUM](input._internal_.WebGLRenderingContextBase.md#invalid_enum)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16246

___

### INVALID\_FRAMEBUFFER\_OPERATION

• `Readonly` **INVALID\_FRAMEBUFFER\_OPERATION**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[INVALID_FRAMEBUFFER_OPERATION](input._internal_.WebGLRenderingContextBase.md#invalid_framebuffer_operation)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16247

___

### INVALID\_OPERATION

• `Readonly` **INVALID\_OPERATION**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[INVALID_OPERATION](input._internal_.WebGLRenderingContextBase.md#invalid_operation)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16248

___

### INVALID\_VALUE

• `Readonly` **INVALID\_VALUE**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[INVALID_VALUE](input._internal_.WebGLRenderingContextBase.md#invalid_value)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16249

___

### INVERT

• `Readonly` **INVERT**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[INVERT](input._internal_.WebGLRenderingContextBase.md#invert)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16250

___

### KEEP

• `Readonly` **KEEP**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[KEEP](input._internal_.WebGLRenderingContextBase.md#keep)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16251

___

### LEQUAL

• `Readonly` **LEQUAL**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[LEQUAL](input._internal_.WebGLRenderingContextBase.md#lequal)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16252

___

### LESS

• `Readonly` **LESS**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[LESS](input._internal_.WebGLRenderingContextBase.md#less)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16253

___

### LINEAR

• `Readonly` **LINEAR**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[LINEAR](input._internal_.WebGLRenderingContextBase.md#linear)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16254

___

### LINEAR\_MIPMAP\_LINEAR

• `Readonly` **LINEAR\_MIPMAP\_LINEAR**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[LINEAR_MIPMAP_LINEAR](input._internal_.WebGLRenderingContextBase.md#linear_mipmap_linear)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16255

___

### LINEAR\_MIPMAP\_NEAREST

• `Readonly` **LINEAR\_MIPMAP\_NEAREST**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[LINEAR_MIPMAP_NEAREST](input._internal_.WebGLRenderingContextBase.md#linear_mipmap_nearest)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16256

___

### LINES

• `Readonly` **LINES**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[LINES](input._internal_.WebGLRenderingContextBase.md#lines)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16257

___

### LINE\_LOOP

• `Readonly` **LINE\_LOOP**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[LINE_LOOP](input._internal_.WebGLRenderingContextBase.md#line_loop)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16258

___

### LINE\_STRIP

• `Readonly` **LINE\_STRIP**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[LINE_STRIP](input._internal_.WebGLRenderingContextBase.md#line_strip)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16259

___

### LINE\_WIDTH

• `Readonly` **LINE\_WIDTH**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[LINE_WIDTH](input._internal_.WebGLRenderingContextBase.md#line_width)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16260

___

### LINK\_STATUS

• `Readonly` **LINK\_STATUS**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[LINK_STATUS](input._internal_.WebGLRenderingContextBase.md#link_status)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16261

___

### LOW\_FLOAT

• `Readonly` **LOW\_FLOAT**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[LOW_FLOAT](input._internal_.WebGLRenderingContextBase.md#low_float)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16262

___

### LOW\_INT

• `Readonly` **LOW\_INT**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[LOW_INT](input._internal_.WebGLRenderingContextBase.md#low_int)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16263

___

### LUMINANCE

• `Readonly` **LUMINANCE**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[LUMINANCE](input._internal_.WebGLRenderingContextBase.md#luminance)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16264

___

### LUMINANCE\_ALPHA

• `Readonly` **LUMINANCE\_ALPHA**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[LUMINANCE_ALPHA](input._internal_.WebGLRenderingContextBase.md#luminance_alpha)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16265

___

### MAX\_COMBINED\_TEXTURE\_IMAGE\_UNITS

• `Readonly` **MAX\_COMBINED\_TEXTURE\_IMAGE\_UNITS**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[MAX_COMBINED_TEXTURE_IMAGE_UNITS](input._internal_.WebGLRenderingContextBase.md#max_combined_texture_image_units)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16266

___

### MAX\_CUBE\_MAP\_TEXTURE\_SIZE

• `Readonly` **MAX\_CUBE\_MAP\_TEXTURE\_SIZE**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[MAX_CUBE_MAP_TEXTURE_SIZE](input._internal_.WebGLRenderingContextBase.md#max_cube_map_texture_size)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16267

___

### MAX\_FRAGMENT\_UNIFORM\_VECTORS

• `Readonly` **MAX\_FRAGMENT\_UNIFORM\_VECTORS**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[MAX_FRAGMENT_UNIFORM_VECTORS](input._internal_.WebGLRenderingContextBase.md#max_fragment_uniform_vectors)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16268

___

### MAX\_RENDERBUFFER\_SIZE

• `Readonly` **MAX\_RENDERBUFFER\_SIZE**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[MAX_RENDERBUFFER_SIZE](input._internal_.WebGLRenderingContextBase.md#max_renderbuffer_size)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16269

___

### MAX\_TEXTURE\_IMAGE\_UNITS

• `Readonly` **MAX\_TEXTURE\_IMAGE\_UNITS**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[MAX_TEXTURE_IMAGE_UNITS](input._internal_.WebGLRenderingContextBase.md#max_texture_image_units)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16270

___

### MAX\_TEXTURE\_SIZE

• `Readonly` **MAX\_TEXTURE\_SIZE**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[MAX_TEXTURE_SIZE](input._internal_.WebGLRenderingContextBase.md#max_texture_size)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16271

___

### MAX\_VARYING\_VECTORS

• `Readonly` **MAX\_VARYING\_VECTORS**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[MAX_VARYING_VECTORS](input._internal_.WebGLRenderingContextBase.md#max_varying_vectors)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16272

___

### MAX\_VERTEX\_ATTRIBS

• `Readonly` **MAX\_VERTEX\_ATTRIBS**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[MAX_VERTEX_ATTRIBS](input._internal_.WebGLRenderingContextBase.md#max_vertex_attribs)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16273

___

### MAX\_VERTEX\_TEXTURE\_IMAGE\_UNITS

• `Readonly` **MAX\_VERTEX\_TEXTURE\_IMAGE\_UNITS**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[MAX_VERTEX_TEXTURE_IMAGE_UNITS](input._internal_.WebGLRenderingContextBase.md#max_vertex_texture_image_units)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16274

___

### MAX\_VERTEX\_UNIFORM\_VECTORS

• `Readonly` **MAX\_VERTEX\_UNIFORM\_VECTORS**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[MAX_VERTEX_UNIFORM_VECTORS](input._internal_.WebGLRenderingContextBase.md#max_vertex_uniform_vectors)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16275

___

### MAX\_VIEWPORT\_DIMS

• `Readonly` **MAX\_VIEWPORT\_DIMS**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[MAX_VIEWPORT_DIMS](input._internal_.WebGLRenderingContextBase.md#max_viewport_dims)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16276

___

### MEDIUM\_FLOAT

• `Readonly` **MEDIUM\_FLOAT**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[MEDIUM_FLOAT](input._internal_.WebGLRenderingContextBase.md#medium_float)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16277

___

### MEDIUM\_INT

• `Readonly` **MEDIUM\_INT**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[MEDIUM_INT](input._internal_.WebGLRenderingContextBase.md#medium_int)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16278

___

### MIRRORED\_REPEAT

• `Readonly` **MIRRORED\_REPEAT**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[MIRRORED_REPEAT](input._internal_.WebGLRenderingContextBase.md#mirrored_repeat)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16279

___

### NEAREST

• `Readonly` **NEAREST**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[NEAREST](input._internal_.WebGLRenderingContextBase.md#nearest)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16280

___

### NEAREST\_MIPMAP\_LINEAR

• `Readonly` **NEAREST\_MIPMAP\_LINEAR**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[NEAREST_MIPMAP_LINEAR](input._internal_.WebGLRenderingContextBase.md#nearest_mipmap_linear)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16281

___

### NEAREST\_MIPMAP\_NEAREST

• `Readonly` **NEAREST\_MIPMAP\_NEAREST**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[NEAREST_MIPMAP_NEAREST](input._internal_.WebGLRenderingContextBase.md#nearest_mipmap_nearest)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16282

___

### NEVER

• `Readonly` **NEVER**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[NEVER](input._internal_.WebGLRenderingContextBase.md#never)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16283

___

### NICEST

• `Readonly` **NICEST**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[NICEST](input._internal_.WebGLRenderingContextBase.md#nicest)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16284

___

### NONE

• `Readonly` **NONE**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[NONE](input._internal_.WebGLRenderingContextBase.md#none)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16285

___

### NOTEQUAL

• `Readonly` **NOTEQUAL**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[NOTEQUAL](input._internal_.WebGLRenderingContextBase.md#notequal)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16286

___

### NO\_ERROR

• `Readonly` **NO\_ERROR**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[NO_ERROR](input._internal_.WebGLRenderingContextBase.md#no_error)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16287

___

### ONE

• `Readonly` **ONE**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[ONE](input._internal_.WebGLRenderingContextBase.md#one)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16288

___

### ONE\_MINUS\_CONSTANT\_ALPHA

• `Readonly` **ONE\_MINUS\_CONSTANT\_ALPHA**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[ONE_MINUS_CONSTANT_ALPHA](input._internal_.WebGLRenderingContextBase.md#one_minus_constant_alpha)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16289

___

### ONE\_MINUS\_CONSTANT\_COLOR

• `Readonly` **ONE\_MINUS\_CONSTANT\_COLOR**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[ONE_MINUS_CONSTANT_COLOR](input._internal_.WebGLRenderingContextBase.md#one_minus_constant_color)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16290

___

### ONE\_MINUS\_DST\_ALPHA

• `Readonly` **ONE\_MINUS\_DST\_ALPHA**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[ONE_MINUS_DST_ALPHA](input._internal_.WebGLRenderingContextBase.md#one_minus_dst_alpha)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16291

___

### ONE\_MINUS\_DST\_COLOR

• `Readonly` **ONE\_MINUS\_DST\_COLOR**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[ONE_MINUS_DST_COLOR](input._internal_.WebGLRenderingContextBase.md#one_minus_dst_color)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16292

___

### ONE\_MINUS\_SRC\_ALPHA

• `Readonly` **ONE\_MINUS\_SRC\_ALPHA**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[ONE_MINUS_SRC_ALPHA](input._internal_.WebGLRenderingContextBase.md#one_minus_src_alpha)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16293

___

### ONE\_MINUS\_SRC\_COLOR

• `Readonly` **ONE\_MINUS\_SRC\_COLOR**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[ONE_MINUS_SRC_COLOR](input._internal_.WebGLRenderingContextBase.md#one_minus_src_color)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16294

___

### OUT\_OF\_MEMORY

• `Readonly` **OUT\_OF\_MEMORY**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[OUT_OF_MEMORY](input._internal_.WebGLRenderingContextBase.md#out_of_memory)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16295

___

### PACK\_ALIGNMENT

• `Readonly` **PACK\_ALIGNMENT**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[PACK_ALIGNMENT](input._internal_.WebGLRenderingContextBase.md#pack_alignment)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16296

___

### POINTS

• `Readonly` **POINTS**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[POINTS](input._internal_.WebGLRenderingContextBase.md#points)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16297

___

### POLYGON\_OFFSET\_FACTOR

• `Readonly` **POLYGON\_OFFSET\_FACTOR**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[POLYGON_OFFSET_FACTOR](input._internal_.WebGLRenderingContextBase.md#polygon_offset_factor)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16298

___

### POLYGON\_OFFSET\_FILL

• `Readonly` **POLYGON\_OFFSET\_FILL**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[POLYGON_OFFSET_FILL](input._internal_.WebGLRenderingContextBase.md#polygon_offset_fill)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16299

___

### POLYGON\_OFFSET\_UNITS

• `Readonly` **POLYGON\_OFFSET\_UNITS**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[POLYGON_OFFSET_UNITS](input._internal_.WebGLRenderingContextBase.md#polygon_offset_units)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16300

___

### RED\_BITS

• `Readonly` **RED\_BITS**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[RED_BITS](input._internal_.WebGLRenderingContextBase.md#red_bits)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16301

___

### RENDERBUFFER

• `Readonly` **RENDERBUFFER**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[RENDERBUFFER](input._internal_.WebGLRenderingContextBase.md#renderbuffer)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16302

___

### RENDERBUFFER\_ALPHA\_SIZE

• `Readonly` **RENDERBUFFER\_ALPHA\_SIZE**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[RENDERBUFFER_ALPHA_SIZE](input._internal_.WebGLRenderingContextBase.md#renderbuffer_alpha_size)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16303

___

### RENDERBUFFER\_BINDING

• `Readonly` **RENDERBUFFER\_BINDING**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[RENDERBUFFER_BINDING](input._internal_.WebGLRenderingContextBase.md#renderbuffer_binding)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16304

___

### RENDERBUFFER\_BLUE\_SIZE

• `Readonly` **RENDERBUFFER\_BLUE\_SIZE**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[RENDERBUFFER_BLUE_SIZE](input._internal_.WebGLRenderingContextBase.md#renderbuffer_blue_size)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16305

___

### RENDERBUFFER\_DEPTH\_SIZE

• `Readonly` **RENDERBUFFER\_DEPTH\_SIZE**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[RENDERBUFFER_DEPTH_SIZE](input._internal_.WebGLRenderingContextBase.md#renderbuffer_depth_size)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16306

___

### RENDERBUFFER\_GREEN\_SIZE

• `Readonly` **RENDERBUFFER\_GREEN\_SIZE**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[RENDERBUFFER_GREEN_SIZE](input._internal_.WebGLRenderingContextBase.md#renderbuffer_green_size)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16307

___

### RENDERBUFFER\_HEIGHT

• `Readonly` **RENDERBUFFER\_HEIGHT**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[RENDERBUFFER_HEIGHT](input._internal_.WebGLRenderingContextBase.md#renderbuffer_height)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16308

___

### RENDERBUFFER\_INTERNAL\_FORMAT

• `Readonly` **RENDERBUFFER\_INTERNAL\_FORMAT**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[RENDERBUFFER_INTERNAL_FORMAT](input._internal_.WebGLRenderingContextBase.md#renderbuffer_internal_format)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16309

___

### RENDERBUFFER\_RED\_SIZE

• `Readonly` **RENDERBUFFER\_RED\_SIZE**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[RENDERBUFFER_RED_SIZE](input._internal_.WebGLRenderingContextBase.md#renderbuffer_red_size)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16310

___

### RENDERBUFFER\_STENCIL\_SIZE

• `Readonly` **RENDERBUFFER\_STENCIL\_SIZE**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[RENDERBUFFER_STENCIL_SIZE](input._internal_.WebGLRenderingContextBase.md#renderbuffer_stencil_size)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16311

___

### RENDERBUFFER\_WIDTH

• `Readonly` **RENDERBUFFER\_WIDTH**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[RENDERBUFFER_WIDTH](input._internal_.WebGLRenderingContextBase.md#renderbuffer_width)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16312

___

### RENDERER

• `Readonly` **RENDERER**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[RENDERER](input._internal_.WebGLRenderingContextBase.md#renderer)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16313

___

### REPEAT

• `Readonly` **REPEAT**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[REPEAT](input._internal_.WebGLRenderingContextBase.md#repeat)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16314

___

### REPLACE

• `Readonly` **REPLACE**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[REPLACE](input._internal_.WebGLRenderingContextBase.md#replace)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16315

___

### RGB

• `Readonly` **RGB**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[RGB](input._internal_.WebGLRenderingContextBase.md#rgb)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16316

___

### RGB565

• `Readonly` **RGB565**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[RGB565](input._internal_.WebGLRenderingContextBase.md#rgb565)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16317

___

### RGB5\_A1

• `Readonly` **RGB5\_A1**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[RGB5_A1](input._internal_.WebGLRenderingContextBase.md#rgb5_a1)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16318

___

### RGBA

• `Readonly` **RGBA**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[RGBA](input._internal_.WebGLRenderingContextBase.md#rgba)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16319

___

### RGBA4

• `Readonly` **RGBA4**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[RGBA4](input._internal_.WebGLRenderingContextBase.md#rgba4)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16320

___

### SAMPLER\_2D

• `Readonly` **SAMPLER\_2D**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[SAMPLER_2D](input._internal_.WebGLRenderingContextBase.md#sampler_2d)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16321

___

### SAMPLER\_CUBE

• `Readonly` **SAMPLER\_CUBE**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[SAMPLER_CUBE](input._internal_.WebGLRenderingContextBase.md#sampler_cube)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16322

___

### SAMPLES

• `Readonly` **SAMPLES**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[SAMPLES](input._internal_.WebGLRenderingContextBase.md#samples)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16323

___

### SAMPLE\_ALPHA\_TO\_COVERAGE

• `Readonly` **SAMPLE\_ALPHA\_TO\_COVERAGE**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[SAMPLE_ALPHA_TO_COVERAGE](input._internal_.WebGLRenderingContextBase.md#sample_alpha_to_coverage)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16324

___

### SAMPLE\_BUFFERS

• `Readonly` **SAMPLE\_BUFFERS**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[SAMPLE_BUFFERS](input._internal_.WebGLRenderingContextBase.md#sample_buffers)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16325

___

### SAMPLE\_COVERAGE

• `Readonly` **SAMPLE\_COVERAGE**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[SAMPLE_COVERAGE](input._internal_.WebGLRenderingContextBase.md#sample_coverage)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16326

___

### SAMPLE\_COVERAGE\_INVERT

• `Readonly` **SAMPLE\_COVERAGE\_INVERT**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[SAMPLE_COVERAGE_INVERT](input._internal_.WebGLRenderingContextBase.md#sample_coverage_invert)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16327

___

### SAMPLE\_COVERAGE\_VALUE

• `Readonly` **SAMPLE\_COVERAGE\_VALUE**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[SAMPLE_COVERAGE_VALUE](input._internal_.WebGLRenderingContextBase.md#sample_coverage_value)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16328

___

### SCISSOR\_BOX

• `Readonly` **SCISSOR\_BOX**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[SCISSOR_BOX](input._internal_.WebGLRenderingContextBase.md#scissor_box)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16329

___

### SCISSOR\_TEST

• `Readonly` **SCISSOR\_TEST**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[SCISSOR_TEST](input._internal_.WebGLRenderingContextBase.md#scissor_test)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16330

___

### SHADER\_TYPE

• `Readonly` **SHADER\_TYPE**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[SHADER_TYPE](input._internal_.WebGLRenderingContextBase.md#shader_type)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16331

___

### SHADING\_LANGUAGE\_VERSION

• `Readonly` **SHADING\_LANGUAGE\_VERSION**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[SHADING_LANGUAGE_VERSION](input._internal_.WebGLRenderingContextBase.md#shading_language_version)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16332

___

### SHORT

• `Readonly` **SHORT**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[SHORT](input._internal_.WebGLRenderingContextBase.md#short)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16333

___

### SRC\_ALPHA

• `Readonly` **SRC\_ALPHA**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[SRC_ALPHA](input._internal_.WebGLRenderingContextBase.md#src_alpha)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16334

___

### SRC\_ALPHA\_SATURATE

• `Readonly` **SRC\_ALPHA\_SATURATE**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[SRC_ALPHA_SATURATE](input._internal_.WebGLRenderingContextBase.md#src_alpha_saturate)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16335

___

### SRC\_COLOR

• `Readonly` **SRC\_COLOR**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[SRC_COLOR](input._internal_.WebGLRenderingContextBase.md#src_color)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16336

___

### STATIC\_DRAW

• `Readonly` **STATIC\_DRAW**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[STATIC_DRAW](input._internal_.WebGLRenderingContextBase.md#static_draw)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16337

___

### STENCIL\_ATTACHMENT

• `Readonly` **STENCIL\_ATTACHMENT**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[STENCIL_ATTACHMENT](input._internal_.WebGLRenderingContextBase.md#stencil_attachment)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16338

___

### STENCIL\_BACK\_FAIL

• `Readonly` **STENCIL\_BACK\_FAIL**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[STENCIL_BACK_FAIL](input._internal_.WebGLRenderingContextBase.md#stencil_back_fail)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16339

___

### STENCIL\_BACK\_FUNC

• `Readonly` **STENCIL\_BACK\_FUNC**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[STENCIL_BACK_FUNC](input._internal_.WebGLRenderingContextBase.md#stencil_back_func)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16340

___

### STENCIL\_BACK\_PASS\_DEPTH\_FAIL

• `Readonly` **STENCIL\_BACK\_PASS\_DEPTH\_FAIL**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[STENCIL_BACK_PASS_DEPTH_FAIL](input._internal_.WebGLRenderingContextBase.md#stencil_back_pass_depth_fail)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16341

___

### STENCIL\_BACK\_PASS\_DEPTH\_PASS

• `Readonly` **STENCIL\_BACK\_PASS\_DEPTH\_PASS**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[STENCIL_BACK_PASS_DEPTH_PASS](input._internal_.WebGLRenderingContextBase.md#stencil_back_pass_depth_pass)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16342

___

### STENCIL\_BACK\_REF

• `Readonly` **STENCIL\_BACK\_REF**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[STENCIL_BACK_REF](input._internal_.WebGLRenderingContextBase.md#stencil_back_ref)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16343

___

### STENCIL\_BACK\_VALUE\_MASK

• `Readonly` **STENCIL\_BACK\_VALUE\_MASK**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[STENCIL_BACK_VALUE_MASK](input._internal_.WebGLRenderingContextBase.md#stencil_back_value_mask)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16344

___

### STENCIL\_BACK\_WRITEMASK

• `Readonly` **STENCIL\_BACK\_WRITEMASK**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[STENCIL_BACK_WRITEMASK](input._internal_.WebGLRenderingContextBase.md#stencil_back_writemask)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16345

___

### STENCIL\_BITS

• `Readonly` **STENCIL\_BITS**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[STENCIL_BITS](input._internal_.WebGLRenderingContextBase.md#stencil_bits)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16346

___

### STENCIL\_BUFFER\_BIT

• `Readonly` **STENCIL\_BUFFER\_BIT**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[STENCIL_BUFFER_BIT](input._internal_.WebGLRenderingContextBase.md#stencil_buffer_bit)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16347

___

### STENCIL\_CLEAR\_VALUE

• `Readonly` **STENCIL\_CLEAR\_VALUE**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[STENCIL_CLEAR_VALUE](input._internal_.WebGLRenderingContextBase.md#stencil_clear_value)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16348

___

### STENCIL\_FAIL

• `Readonly` **STENCIL\_FAIL**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[STENCIL_FAIL](input._internal_.WebGLRenderingContextBase.md#stencil_fail)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16349

___

### STENCIL\_FUNC

• `Readonly` **STENCIL\_FUNC**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[STENCIL_FUNC](input._internal_.WebGLRenderingContextBase.md#stencil_func)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16350

___

### STENCIL\_INDEX8

• `Readonly` **STENCIL\_INDEX8**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[STENCIL_INDEX8](input._internal_.WebGLRenderingContextBase.md#stencil_index8)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16351

___

### STENCIL\_PASS\_DEPTH\_FAIL

• `Readonly` **STENCIL\_PASS\_DEPTH\_FAIL**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[STENCIL_PASS_DEPTH_FAIL](input._internal_.WebGLRenderingContextBase.md#stencil_pass_depth_fail)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16352

___

### STENCIL\_PASS\_DEPTH\_PASS

• `Readonly` **STENCIL\_PASS\_DEPTH\_PASS**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[STENCIL_PASS_DEPTH_PASS](input._internal_.WebGLRenderingContextBase.md#stencil_pass_depth_pass)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16353

___

### STENCIL\_REF

• `Readonly` **STENCIL\_REF**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[STENCIL_REF](input._internal_.WebGLRenderingContextBase.md#stencil_ref)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16354

___

### STENCIL\_TEST

• `Readonly` **STENCIL\_TEST**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[STENCIL_TEST](input._internal_.WebGLRenderingContextBase.md#stencil_test)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16355

___

### STENCIL\_VALUE\_MASK

• `Readonly` **STENCIL\_VALUE\_MASK**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[STENCIL_VALUE_MASK](input._internal_.WebGLRenderingContextBase.md#stencil_value_mask)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16356

___

### STENCIL\_WRITEMASK

• `Readonly` **STENCIL\_WRITEMASK**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[STENCIL_WRITEMASK](input._internal_.WebGLRenderingContextBase.md#stencil_writemask)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16357

___

### STREAM\_DRAW

• `Readonly` **STREAM\_DRAW**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[STREAM_DRAW](input._internal_.WebGLRenderingContextBase.md#stream_draw)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16358

___

### SUBPIXEL\_BITS

• `Readonly` **SUBPIXEL\_BITS**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[SUBPIXEL_BITS](input._internal_.WebGLRenderingContextBase.md#subpixel_bits)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16359

___

### TEXTURE

• `Readonly` **TEXTURE**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[TEXTURE](input._internal_.WebGLRenderingContextBase.md#texture)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16360

___

### TEXTURE0

• `Readonly` **TEXTURE0**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[TEXTURE0](input._internal_.WebGLRenderingContextBase.md#texture0)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16361

___

### TEXTURE1

• `Readonly` **TEXTURE1**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[TEXTURE1](input._internal_.WebGLRenderingContextBase.md#texture1)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16362

___

### TEXTURE10

• `Readonly` **TEXTURE10**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[TEXTURE10](input._internal_.WebGLRenderingContextBase.md#texture10)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16363

___

### TEXTURE11

• `Readonly` **TEXTURE11**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[TEXTURE11](input._internal_.WebGLRenderingContextBase.md#texture11)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16364

___

### TEXTURE12

• `Readonly` **TEXTURE12**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[TEXTURE12](input._internal_.WebGLRenderingContextBase.md#texture12)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16365

___

### TEXTURE13

• `Readonly` **TEXTURE13**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[TEXTURE13](input._internal_.WebGLRenderingContextBase.md#texture13)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16366

___

### TEXTURE14

• `Readonly` **TEXTURE14**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[TEXTURE14](input._internal_.WebGLRenderingContextBase.md#texture14)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16367

___

### TEXTURE15

• `Readonly` **TEXTURE15**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[TEXTURE15](input._internal_.WebGLRenderingContextBase.md#texture15)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16368

___

### TEXTURE16

• `Readonly` **TEXTURE16**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[TEXTURE16](input._internal_.WebGLRenderingContextBase.md#texture16)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16369

___

### TEXTURE17

• `Readonly` **TEXTURE17**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[TEXTURE17](input._internal_.WebGLRenderingContextBase.md#texture17)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16370

___

### TEXTURE18

• `Readonly` **TEXTURE18**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[TEXTURE18](input._internal_.WebGLRenderingContextBase.md#texture18)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16371

___

### TEXTURE19

• `Readonly` **TEXTURE19**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[TEXTURE19](input._internal_.WebGLRenderingContextBase.md#texture19)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16372

___

### TEXTURE2

• `Readonly` **TEXTURE2**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[TEXTURE2](input._internal_.WebGLRenderingContextBase.md#texture2)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16373

___

### TEXTURE20

• `Readonly` **TEXTURE20**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[TEXTURE20](input._internal_.WebGLRenderingContextBase.md#texture20)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16374

___

### TEXTURE21

• `Readonly` **TEXTURE21**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[TEXTURE21](input._internal_.WebGLRenderingContextBase.md#texture21)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16375

___

### TEXTURE22

• `Readonly` **TEXTURE22**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[TEXTURE22](input._internal_.WebGLRenderingContextBase.md#texture22)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16376

___

### TEXTURE23

• `Readonly` **TEXTURE23**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[TEXTURE23](input._internal_.WebGLRenderingContextBase.md#texture23)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16377

___

### TEXTURE24

• `Readonly` **TEXTURE24**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[TEXTURE24](input._internal_.WebGLRenderingContextBase.md#texture24)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16378

___

### TEXTURE25

• `Readonly` **TEXTURE25**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[TEXTURE25](input._internal_.WebGLRenderingContextBase.md#texture25)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16379

___

### TEXTURE26

• `Readonly` **TEXTURE26**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[TEXTURE26](input._internal_.WebGLRenderingContextBase.md#texture26)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16380

___

### TEXTURE27

• `Readonly` **TEXTURE27**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[TEXTURE27](input._internal_.WebGLRenderingContextBase.md#texture27)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16381

___

### TEXTURE28

• `Readonly` **TEXTURE28**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[TEXTURE28](input._internal_.WebGLRenderingContextBase.md#texture28)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16382

___

### TEXTURE29

• `Readonly` **TEXTURE29**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[TEXTURE29](input._internal_.WebGLRenderingContextBase.md#texture29)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16383

___

### TEXTURE3

• `Readonly` **TEXTURE3**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[TEXTURE3](input._internal_.WebGLRenderingContextBase.md#texture3)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16384

___

### TEXTURE30

• `Readonly` **TEXTURE30**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[TEXTURE30](input._internal_.WebGLRenderingContextBase.md#texture30)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16385

___

### TEXTURE31

• `Readonly` **TEXTURE31**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[TEXTURE31](input._internal_.WebGLRenderingContextBase.md#texture31)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16386

___

### TEXTURE4

• `Readonly` **TEXTURE4**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[TEXTURE4](input._internal_.WebGLRenderingContextBase.md#texture4)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16387

___

### TEXTURE5

• `Readonly` **TEXTURE5**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[TEXTURE5](input._internal_.WebGLRenderingContextBase.md#texture5)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16388

___

### TEXTURE6

• `Readonly` **TEXTURE6**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[TEXTURE6](input._internal_.WebGLRenderingContextBase.md#texture6)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16389

___

### TEXTURE7

• `Readonly` **TEXTURE7**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[TEXTURE7](input._internal_.WebGLRenderingContextBase.md#texture7)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16390

___

### TEXTURE8

• `Readonly` **TEXTURE8**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[TEXTURE8](input._internal_.WebGLRenderingContextBase.md#texture8)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16391

___

### TEXTURE9

• `Readonly` **TEXTURE9**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[TEXTURE9](input._internal_.WebGLRenderingContextBase.md#texture9)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16392

___

### TEXTURE\_2D

• `Readonly` **TEXTURE\_2D**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[TEXTURE_2D](input._internal_.WebGLRenderingContextBase.md#texture_2d)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16393

___

### TEXTURE\_BINDING\_2D

• `Readonly` **TEXTURE\_BINDING\_2D**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[TEXTURE_BINDING_2D](input._internal_.WebGLRenderingContextBase.md#texture_binding_2d)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16394

___

### TEXTURE\_BINDING\_CUBE\_MAP

• `Readonly` **TEXTURE\_BINDING\_CUBE\_MAP**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[TEXTURE_BINDING_CUBE_MAP](input._internal_.WebGLRenderingContextBase.md#texture_binding_cube_map)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16395

___

### TEXTURE\_CUBE\_MAP

• `Readonly` **TEXTURE\_CUBE\_MAP**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[TEXTURE_CUBE_MAP](input._internal_.WebGLRenderingContextBase.md#texture_cube_map)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16396

___

### TEXTURE\_CUBE\_MAP\_NEGATIVE\_X

• `Readonly` **TEXTURE\_CUBE\_MAP\_NEGATIVE\_X**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[TEXTURE_CUBE_MAP_NEGATIVE_X](input._internal_.WebGLRenderingContextBase.md#texture_cube_map_negative_x)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16397

___

### TEXTURE\_CUBE\_MAP\_NEGATIVE\_Y

• `Readonly` **TEXTURE\_CUBE\_MAP\_NEGATIVE\_Y**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[TEXTURE_CUBE_MAP_NEGATIVE_Y](input._internal_.WebGLRenderingContextBase.md#texture_cube_map_negative_y)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16398

___

### TEXTURE\_CUBE\_MAP\_NEGATIVE\_Z

• `Readonly` **TEXTURE\_CUBE\_MAP\_NEGATIVE\_Z**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[TEXTURE_CUBE_MAP_NEGATIVE_Z](input._internal_.WebGLRenderingContextBase.md#texture_cube_map_negative_z)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16399

___

### TEXTURE\_CUBE\_MAP\_POSITIVE\_X

• `Readonly` **TEXTURE\_CUBE\_MAP\_POSITIVE\_X**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[TEXTURE_CUBE_MAP_POSITIVE_X](input._internal_.WebGLRenderingContextBase.md#texture_cube_map_positive_x)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16400

___

### TEXTURE\_CUBE\_MAP\_POSITIVE\_Y

• `Readonly` **TEXTURE\_CUBE\_MAP\_POSITIVE\_Y**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[TEXTURE_CUBE_MAP_POSITIVE_Y](input._internal_.WebGLRenderingContextBase.md#texture_cube_map_positive_y)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16401

___

### TEXTURE\_CUBE\_MAP\_POSITIVE\_Z

• `Readonly` **TEXTURE\_CUBE\_MAP\_POSITIVE\_Z**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[TEXTURE_CUBE_MAP_POSITIVE_Z](input._internal_.WebGLRenderingContextBase.md#texture_cube_map_positive_z)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16402

___

### TEXTURE\_MAG\_FILTER

• `Readonly` **TEXTURE\_MAG\_FILTER**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[TEXTURE_MAG_FILTER](input._internal_.WebGLRenderingContextBase.md#texture_mag_filter)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16403

___

### TEXTURE\_MIN\_FILTER

• `Readonly` **TEXTURE\_MIN\_FILTER**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[TEXTURE_MIN_FILTER](input._internal_.WebGLRenderingContextBase.md#texture_min_filter)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16404

___

### TEXTURE\_WRAP\_S

• `Readonly` **TEXTURE\_WRAP\_S**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[TEXTURE_WRAP_S](input._internal_.WebGLRenderingContextBase.md#texture_wrap_s)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16405

___

### TEXTURE\_WRAP\_T

• `Readonly` **TEXTURE\_WRAP\_T**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[TEXTURE_WRAP_T](input._internal_.WebGLRenderingContextBase.md#texture_wrap_t)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16406

___

### TRIANGLES

• `Readonly` **TRIANGLES**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[TRIANGLES](input._internal_.WebGLRenderingContextBase.md#triangles)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16407

___

### TRIANGLE\_FAN

• `Readonly` **TRIANGLE\_FAN**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[TRIANGLE_FAN](input._internal_.WebGLRenderingContextBase.md#triangle_fan)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16408

___

### TRIANGLE\_STRIP

• `Readonly` **TRIANGLE\_STRIP**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[TRIANGLE_STRIP](input._internal_.WebGLRenderingContextBase.md#triangle_strip)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16409

___

### UNPACK\_ALIGNMENT

• `Readonly` **UNPACK\_ALIGNMENT**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[UNPACK_ALIGNMENT](input._internal_.WebGLRenderingContextBase.md#unpack_alignment)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16410

___

### UNPACK\_COLORSPACE\_CONVERSION\_WEBGL

• `Readonly` **UNPACK\_COLORSPACE\_CONVERSION\_WEBGL**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[UNPACK_COLORSPACE_CONVERSION_WEBGL](input._internal_.WebGLRenderingContextBase.md#unpack_colorspace_conversion_webgl)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16411

___

### UNPACK\_FLIP\_Y\_WEBGL

• `Readonly` **UNPACK\_FLIP\_Y\_WEBGL**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[UNPACK_FLIP_Y_WEBGL](input._internal_.WebGLRenderingContextBase.md#unpack_flip_y_webgl)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16412

___

### UNPACK\_PREMULTIPLY\_ALPHA\_WEBGL

• `Readonly` **UNPACK\_PREMULTIPLY\_ALPHA\_WEBGL**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[UNPACK_PREMULTIPLY_ALPHA_WEBGL](input._internal_.WebGLRenderingContextBase.md#unpack_premultiply_alpha_webgl)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16413

___

### UNSIGNED\_BYTE

• `Readonly` **UNSIGNED\_BYTE**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[UNSIGNED_BYTE](input._internal_.WebGLRenderingContextBase.md#unsigned_byte)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16414

___

### UNSIGNED\_INT

• `Readonly` **UNSIGNED\_INT**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[UNSIGNED_INT](input._internal_.WebGLRenderingContextBase.md#unsigned_int)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16415

___

### UNSIGNED\_SHORT

• `Readonly` **UNSIGNED\_SHORT**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[UNSIGNED_SHORT](input._internal_.WebGLRenderingContextBase.md#unsigned_short)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16416

___

### UNSIGNED\_SHORT\_4\_4\_4\_4

• `Readonly` **UNSIGNED\_SHORT\_4\_4\_4\_4**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[UNSIGNED_SHORT_4_4_4_4](input._internal_.WebGLRenderingContextBase.md#unsigned_short_4_4_4_4)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16417

___

### UNSIGNED\_SHORT\_5\_5\_5\_1

• `Readonly` **UNSIGNED\_SHORT\_5\_5\_5\_1**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[UNSIGNED_SHORT_5_5_5_1](input._internal_.WebGLRenderingContextBase.md#unsigned_short_5_5_5_1)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16418

___

### UNSIGNED\_SHORT\_5\_6\_5

• `Readonly` **UNSIGNED\_SHORT\_5\_6\_5**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[UNSIGNED_SHORT_5_6_5](input._internal_.WebGLRenderingContextBase.md#unsigned_short_5_6_5)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16419

___

### VALIDATE\_STATUS

• `Readonly` **VALIDATE\_STATUS**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[VALIDATE_STATUS](input._internal_.WebGLRenderingContextBase.md#validate_status)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16420

___

### VENDOR

• `Readonly` **VENDOR**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[VENDOR](input._internal_.WebGLRenderingContextBase.md#vendor)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16421

___

### VERSION

• `Readonly` **VERSION**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[VERSION](input._internal_.WebGLRenderingContextBase.md#version)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16422

___

### VERTEX\_ATTRIB\_ARRAY\_BUFFER\_BINDING

• `Readonly` **VERTEX\_ATTRIB\_ARRAY\_BUFFER\_BINDING**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[VERTEX_ATTRIB_ARRAY_BUFFER_BINDING](input._internal_.WebGLRenderingContextBase.md#vertex_attrib_array_buffer_binding)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16423

___

### VERTEX\_ATTRIB\_ARRAY\_ENABLED

• `Readonly` **VERTEX\_ATTRIB\_ARRAY\_ENABLED**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[VERTEX_ATTRIB_ARRAY_ENABLED](input._internal_.WebGLRenderingContextBase.md#vertex_attrib_array_enabled)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16424

___

### VERTEX\_ATTRIB\_ARRAY\_NORMALIZED

• `Readonly` **VERTEX\_ATTRIB\_ARRAY\_NORMALIZED**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[VERTEX_ATTRIB_ARRAY_NORMALIZED](input._internal_.WebGLRenderingContextBase.md#vertex_attrib_array_normalized)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16425

___

### VERTEX\_ATTRIB\_ARRAY\_POINTER

• `Readonly` **VERTEX\_ATTRIB\_ARRAY\_POINTER**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[VERTEX_ATTRIB_ARRAY_POINTER](input._internal_.WebGLRenderingContextBase.md#vertex_attrib_array_pointer)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16426

___

### VERTEX\_ATTRIB\_ARRAY\_SIZE

• `Readonly` **VERTEX\_ATTRIB\_ARRAY\_SIZE**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[VERTEX_ATTRIB_ARRAY_SIZE](input._internal_.WebGLRenderingContextBase.md#vertex_attrib_array_size)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16427

___

### VERTEX\_ATTRIB\_ARRAY\_STRIDE

• `Readonly` **VERTEX\_ATTRIB\_ARRAY\_STRIDE**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[VERTEX_ATTRIB_ARRAY_STRIDE](input._internal_.WebGLRenderingContextBase.md#vertex_attrib_array_stride)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16428

___

### VERTEX\_ATTRIB\_ARRAY\_TYPE

• `Readonly` **VERTEX\_ATTRIB\_ARRAY\_TYPE**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[VERTEX_ATTRIB_ARRAY_TYPE](input._internal_.WebGLRenderingContextBase.md#vertex_attrib_array_type)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16429

___

### VERTEX\_SHADER

• `Readonly` **VERTEX\_SHADER**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[VERTEX_SHADER](input._internal_.WebGLRenderingContextBase.md#vertex_shader)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16430

___

### VIEWPORT

• `Readonly` **VIEWPORT**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[VIEWPORT](input._internal_.WebGLRenderingContextBase.md#viewport)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16431

___

### ZERO

• `Readonly` **ZERO**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[ZERO](input._internal_.WebGLRenderingContextBase.md#zero)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16432

___

### canvas

• `Readonly` **canvas**: [`HTMLCanvasElement`](../modules/input._internal_.md#htmlcanvaselement)

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[canvas](input._internal_.WebGLRenderingContextBase.md#canvas)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15987

___

### drawingBufferHeight

• `Readonly` **drawingBufferHeight**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[drawingBufferHeight](input._internal_.WebGLRenderingContextBase.md#drawingbufferheight)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15988

___

### drawingBufferWidth

• `Readonly` **drawingBufferWidth**: `number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[drawingBufferWidth](input._internal_.WebGLRenderingContextBase.md#drawingbufferwidth)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15989

## Methods

### activeTexture

▸ **activeTexture**(`texture`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `texture` | `number` |

#### Returns

`void`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[activeTexture](input._internal_.WebGLRenderingContextBase.md#activetexture)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15990

___

### attachShader

▸ **attachShader**(`program`, `shader`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `program` | [`WebGLProgram`](../modules/input._internal_.md#webglprogram) |
| `shader` | [`WebGLShader`](../modules/input._internal_.md#webglshader) |

#### Returns

`void`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[attachShader](input._internal_.WebGLRenderingContextBase.md#attachshader)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15991

___

### bindAttribLocation

▸ **bindAttribLocation**(`program`, `index`, `name`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `program` | [`WebGLProgram`](../modules/input._internal_.md#webglprogram) |
| `index` | `number` |
| `name` | `string` |

#### Returns

`void`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[bindAttribLocation](input._internal_.WebGLRenderingContextBase.md#bindattriblocation)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15992

___

### bindBuffer

▸ **bindBuffer**(`target`, `buffer`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `number` |
| `buffer` | ``null`` \| [`WebGLBuffer`](../modules/input._internal_.md#webglbuffer) |

#### Returns

`void`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[bindBuffer](input._internal_.WebGLRenderingContextBase.md#bindbuffer)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15993

___

### bindFramebuffer

▸ **bindFramebuffer**(`target`, `framebuffer`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `number` |
| `framebuffer` | ``null`` \| [`WebGLFramebuffer`](../modules/input._internal_.md#webglframebuffer) |

#### Returns

`void`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[bindFramebuffer](input._internal_.WebGLRenderingContextBase.md#bindframebuffer)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15994

___

### bindRenderbuffer

▸ **bindRenderbuffer**(`target`, `renderbuffer`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `number` |
| `renderbuffer` | ``null`` \| [`WebGLRenderbuffer`](../modules/input._internal_.md#webglrenderbuffer) |

#### Returns

`void`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[bindRenderbuffer](input._internal_.WebGLRenderingContextBase.md#bindrenderbuffer)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15995

___

### bindTexture

▸ **bindTexture**(`target`, `texture`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `number` |
| `texture` | ``null`` \| [`WebGLTexture`](../modules/input._internal_.md#webgltexture) |

#### Returns

`void`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[bindTexture](input._internal_.WebGLRenderingContextBase.md#bindtexture)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15996

___

### blendColor

▸ **blendColor**(`red`, `green`, `blue`, `alpha`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `red` | `number` |
| `green` | `number` |
| `blue` | `number` |
| `alpha` | `number` |

#### Returns

`void`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[blendColor](input._internal_.WebGLRenderingContextBase.md#blendcolor)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15997

___

### blendEquation

▸ **blendEquation**(`mode`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `mode` | `number` |

#### Returns

`void`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[blendEquation](input._internal_.WebGLRenderingContextBase.md#blendequation)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15998

___

### blendEquationSeparate

▸ **blendEquationSeparate**(`modeRGB`, `modeAlpha`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `modeRGB` | `number` |
| `modeAlpha` | `number` |

#### Returns

`void`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[blendEquationSeparate](input._internal_.WebGLRenderingContextBase.md#blendequationseparate)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15999

___

### blendFunc

▸ **blendFunc**(`sfactor`, `dfactor`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `sfactor` | `number` |
| `dfactor` | `number` |

#### Returns

`void`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[blendFunc](input._internal_.WebGLRenderingContextBase.md#blendfunc)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16000

___

### blendFuncSeparate

▸ **blendFuncSeparate**(`srcRGB`, `dstRGB`, `srcAlpha`, `dstAlpha`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `srcRGB` | `number` |
| `dstRGB` | `number` |
| `srcAlpha` | `number` |
| `dstAlpha` | `number` |

#### Returns

`void`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[blendFuncSeparate](input._internal_.WebGLRenderingContextBase.md#blendfuncseparate)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16001

___

### bufferData

▸ **bufferData**(`target`, `size`, `usage`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `number` |
| `size` | `number` |
| `usage` | `number` |

#### Returns

`void`

#### Inherited from

[WebGLRenderingContextOverloads](input._internal_.WebGLRenderingContextOverloads.md).[bufferData](input._internal_.WebGLRenderingContextOverloads.md#bufferdata)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16436

▸ **bufferData**(`target`, `data`, `usage`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `number` |
| `data` | ``null`` \| [`BufferSource`](../modules/input._internal_.md#buffersource) |
| `usage` | `number` |

#### Returns

`void`

#### Inherited from

[WebGLRenderingContextOverloads](input._internal_.WebGLRenderingContextOverloads.md).[bufferData](input._internal_.WebGLRenderingContextOverloads.md#bufferdata)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16437

___

### bufferSubData

▸ **bufferSubData**(`target`, `offset`, `data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `number` |
| `offset` | `number` |
| `data` | [`BufferSource`](../modules/input._internal_.md#buffersource) |

#### Returns

`void`

#### Inherited from

[WebGLRenderingContextOverloads](input._internal_.WebGLRenderingContextOverloads.md).[bufferSubData](input._internal_.WebGLRenderingContextOverloads.md#buffersubdata)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16438

___

### checkFramebufferStatus

▸ **checkFramebufferStatus**(`target`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `number` |

#### Returns

`number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[checkFramebufferStatus](input._internal_.WebGLRenderingContextBase.md#checkframebufferstatus)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16002

___

### clear

▸ **clear**(`mask`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `mask` | `number` |

#### Returns

`void`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[clear](input._internal_.WebGLRenderingContextBase.md#clear)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16003

___

### clearColor

▸ **clearColor**(`red`, `green`, `blue`, `alpha`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `red` | `number` |
| `green` | `number` |
| `blue` | `number` |
| `alpha` | `number` |

#### Returns

`void`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[clearColor](input._internal_.WebGLRenderingContextBase.md#clearcolor)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16004

___

### clearDepth

▸ **clearDepth**(`depth`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `depth` | `number` |

#### Returns

`void`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[clearDepth](input._internal_.WebGLRenderingContextBase.md#cleardepth)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16005

___

### clearStencil

▸ **clearStencil**(`s`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `s` | `number` |

#### Returns

`void`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[clearStencil](input._internal_.WebGLRenderingContextBase.md#clearstencil)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16006

___

### colorMask

▸ **colorMask**(`red`, `green`, `blue`, `alpha`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `red` | `boolean` |
| `green` | `boolean` |
| `blue` | `boolean` |
| `alpha` | `boolean` |

#### Returns

`void`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[colorMask](input._internal_.WebGLRenderingContextBase.md#colormask)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16007

___

### compileShader

▸ **compileShader**(`shader`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shader` | [`WebGLShader`](../modules/input._internal_.md#webglshader) |

#### Returns

`void`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[compileShader](input._internal_.WebGLRenderingContextBase.md#compileshader)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16008

___

### compressedTexImage2D

▸ **compressedTexImage2D**(`target`, `level`, `internalformat`, `width`, `height`, `border`, `data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `number` |
| `level` | `number` |
| `internalformat` | `number` |
| `width` | `number` |
| `height` | `number` |
| `border` | `number` |
| `data` | [`ArrayBufferView`](input._internal_.ArrayBufferView.md) |

#### Returns

`void`

#### Inherited from

[WebGLRenderingContextOverloads](input._internal_.WebGLRenderingContextOverloads.md).[compressedTexImage2D](input._internal_.WebGLRenderingContextOverloads.md#compressedteximage2d)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16439

___

### compressedTexSubImage2D

▸ **compressedTexSubImage2D**(`target`, `level`, `xoffset`, `yoffset`, `width`, `height`, `format`, `data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `number` |
| `level` | `number` |
| `xoffset` | `number` |
| `yoffset` | `number` |
| `width` | `number` |
| `height` | `number` |
| `format` | `number` |
| `data` | [`ArrayBufferView`](input._internal_.ArrayBufferView.md) |

#### Returns

`void`

#### Inherited from

[WebGLRenderingContextOverloads](input._internal_.WebGLRenderingContextOverloads.md).[compressedTexSubImage2D](input._internal_.WebGLRenderingContextOverloads.md#compressedtexsubimage2d)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16440

___

### copyTexImage2D

▸ **copyTexImage2D**(`target`, `level`, `internalformat`, `x`, `y`, `width`, `height`, `border`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `number` |
| `level` | `number` |
| `internalformat` | `number` |
| `x` | `number` |
| `y` | `number` |
| `width` | `number` |
| `height` | `number` |
| `border` | `number` |

#### Returns

`void`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[copyTexImage2D](input._internal_.WebGLRenderingContextBase.md#copyteximage2d)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16009

___

### copyTexSubImage2D

▸ **copyTexSubImage2D**(`target`, `level`, `xoffset`, `yoffset`, `x`, `y`, `width`, `height`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `number` |
| `level` | `number` |
| `xoffset` | `number` |
| `yoffset` | `number` |
| `x` | `number` |
| `y` | `number` |
| `width` | `number` |
| `height` | `number` |

#### Returns

`void`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[copyTexSubImage2D](input._internal_.WebGLRenderingContextBase.md#copytexsubimage2d)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16010

___

### createBuffer

▸ **createBuffer**(): ``null`` \| [`WebGLBuffer`](../modules/input._internal_.md#webglbuffer)

#### Returns

``null`` \| [`WebGLBuffer`](../modules/input._internal_.md#webglbuffer)

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[createBuffer](input._internal_.WebGLRenderingContextBase.md#createbuffer)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16011

___

### createFramebuffer

▸ **createFramebuffer**(): ``null`` \| [`WebGLFramebuffer`](../modules/input._internal_.md#webglframebuffer)

#### Returns

``null`` \| [`WebGLFramebuffer`](../modules/input._internal_.md#webglframebuffer)

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[createFramebuffer](input._internal_.WebGLRenderingContextBase.md#createframebuffer)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16012

___

### createProgram

▸ **createProgram**(): ``null`` \| [`WebGLProgram`](../modules/input._internal_.md#webglprogram)

#### Returns

``null`` \| [`WebGLProgram`](../modules/input._internal_.md#webglprogram)

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[createProgram](input._internal_.WebGLRenderingContextBase.md#createprogram)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16013

___

### createRenderbuffer

▸ **createRenderbuffer**(): ``null`` \| [`WebGLRenderbuffer`](../modules/input._internal_.md#webglrenderbuffer)

#### Returns

``null`` \| [`WebGLRenderbuffer`](../modules/input._internal_.md#webglrenderbuffer)

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[createRenderbuffer](input._internal_.WebGLRenderingContextBase.md#createrenderbuffer)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16014

___

### createShader

▸ **createShader**(`type`): ``null`` \| [`WebGLShader`](../modules/input._internal_.md#webglshader)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `number` |

#### Returns

``null`` \| [`WebGLShader`](../modules/input._internal_.md#webglshader)

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[createShader](input._internal_.WebGLRenderingContextBase.md#createshader)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16015

___

### createTexture

▸ **createTexture**(): ``null`` \| [`WebGLTexture`](../modules/input._internal_.md#webgltexture)

#### Returns

``null`` \| [`WebGLTexture`](../modules/input._internal_.md#webgltexture)

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[createTexture](input._internal_.WebGLRenderingContextBase.md#createtexture)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16016

___

### cullFace

▸ **cullFace**(`mode`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `mode` | `number` |

#### Returns

`void`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[cullFace](input._internal_.WebGLRenderingContextBase.md#cullface)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16017

___

### deleteBuffer

▸ **deleteBuffer**(`buffer`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `buffer` | ``null`` \| [`WebGLBuffer`](../modules/input._internal_.md#webglbuffer) |

#### Returns

`void`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[deleteBuffer](input._internal_.WebGLRenderingContextBase.md#deletebuffer)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16018

___

### deleteFramebuffer

▸ **deleteFramebuffer**(`framebuffer`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `framebuffer` | ``null`` \| [`WebGLFramebuffer`](../modules/input._internal_.md#webglframebuffer) |

#### Returns

`void`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[deleteFramebuffer](input._internal_.WebGLRenderingContextBase.md#deleteframebuffer)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16019

___

### deleteProgram

▸ **deleteProgram**(`program`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `program` | ``null`` \| [`WebGLProgram`](../modules/input._internal_.md#webglprogram) |

#### Returns

`void`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[deleteProgram](input._internal_.WebGLRenderingContextBase.md#deleteprogram)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16020

___

### deleteRenderbuffer

▸ **deleteRenderbuffer**(`renderbuffer`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `renderbuffer` | ``null`` \| [`WebGLRenderbuffer`](../modules/input._internal_.md#webglrenderbuffer) |

#### Returns

`void`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[deleteRenderbuffer](input._internal_.WebGLRenderingContextBase.md#deleterenderbuffer)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16021

___

### deleteShader

▸ **deleteShader**(`shader`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shader` | ``null`` \| [`WebGLShader`](../modules/input._internal_.md#webglshader) |

#### Returns

`void`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[deleteShader](input._internal_.WebGLRenderingContextBase.md#deleteshader)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16022

___

### deleteTexture

▸ **deleteTexture**(`texture`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `texture` | ``null`` \| [`WebGLTexture`](../modules/input._internal_.md#webgltexture) |

#### Returns

`void`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[deleteTexture](input._internal_.WebGLRenderingContextBase.md#deletetexture)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16023

___

### depthFunc

▸ **depthFunc**(`func`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `func` | `number` |

#### Returns

`void`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[depthFunc](input._internal_.WebGLRenderingContextBase.md#depthfunc)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16024

___

### depthMask

▸ **depthMask**(`flag`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `flag` | `boolean` |

#### Returns

`void`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[depthMask](input._internal_.WebGLRenderingContextBase.md#depthmask)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16025

___

### depthRange

▸ **depthRange**(`zNear`, `zFar`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `zNear` | `number` |
| `zFar` | `number` |

#### Returns

`void`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[depthRange](input._internal_.WebGLRenderingContextBase.md#depthrange)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16026

___

### detachShader

▸ **detachShader**(`program`, `shader`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `program` | [`WebGLProgram`](../modules/input._internal_.md#webglprogram) |
| `shader` | [`WebGLShader`](../modules/input._internal_.md#webglshader) |

#### Returns

`void`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[detachShader](input._internal_.WebGLRenderingContextBase.md#detachshader)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16027

___

### disable

▸ **disable**(`cap`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cap` | `number` |

#### Returns

`void`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[disable](input._internal_.WebGLRenderingContextBase.md#disable)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16028

___

### disableVertexAttribArray

▸ **disableVertexAttribArray**(`index`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

`void`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[disableVertexAttribArray](input._internal_.WebGLRenderingContextBase.md#disablevertexattribarray)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16029

___

### drawArrays

▸ **drawArrays**(`mode`, `first`, `count`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `mode` | `number` |
| `first` | `number` |
| `count` | `number` |

#### Returns

`void`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[drawArrays](input._internal_.WebGLRenderingContextBase.md#drawarrays)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16030

___

### drawElements

▸ **drawElements**(`mode`, `count`, `type`, `offset`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `mode` | `number` |
| `count` | `number` |
| `type` | `number` |
| `offset` | `number` |

#### Returns

`void`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[drawElements](input._internal_.WebGLRenderingContextBase.md#drawelements)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16031

___

### enable

▸ **enable**(`cap`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cap` | `number` |

#### Returns

`void`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[enable](input._internal_.WebGLRenderingContextBase.md#enable)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16032

___

### enableVertexAttribArray

▸ **enableVertexAttribArray**(`index`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

`void`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[enableVertexAttribArray](input._internal_.WebGLRenderingContextBase.md#enablevertexattribarray)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16033

___

### finish

▸ **finish**(): `void`

#### Returns

`void`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[finish](input._internal_.WebGLRenderingContextBase.md#finish)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16034

___

### flush

▸ **flush**(): `void`

#### Returns

`void`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[flush](input._internal_.WebGLRenderingContextBase.md#flush)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16035

___

### framebufferRenderbuffer

▸ **framebufferRenderbuffer**(`target`, `attachment`, `renderbuffertarget`, `renderbuffer`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `number` |
| `attachment` | `number` |
| `renderbuffertarget` | `number` |
| `renderbuffer` | ``null`` \| [`WebGLRenderbuffer`](../modules/input._internal_.md#webglrenderbuffer) |

#### Returns

`void`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[framebufferRenderbuffer](input._internal_.WebGLRenderingContextBase.md#framebufferrenderbuffer)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16036

___

### framebufferTexture2D

▸ **framebufferTexture2D**(`target`, `attachment`, `textarget`, `texture`, `level`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `number` |
| `attachment` | `number` |
| `textarget` | `number` |
| `texture` | ``null`` \| [`WebGLTexture`](../modules/input._internal_.md#webgltexture) |
| `level` | `number` |

#### Returns

`void`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[framebufferTexture2D](input._internal_.WebGLRenderingContextBase.md#framebuffertexture2d)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16037

___

### frontFace

▸ **frontFace**(`mode`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `mode` | `number` |

#### Returns

`void`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[frontFace](input._internal_.WebGLRenderingContextBase.md#frontface)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16038

___

### generateMipmap

▸ **generateMipmap**(`target`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `number` |

#### Returns

`void`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[generateMipmap](input._internal_.WebGLRenderingContextBase.md#generatemipmap)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16039

___

### getActiveAttrib

▸ **getActiveAttrib**(`program`, `index`): ``null`` \| [`WebGLActiveInfo`](../modules/input._internal_.md#webglactiveinfo)

#### Parameters

| Name | Type |
| :------ | :------ |
| `program` | [`WebGLProgram`](../modules/input._internal_.md#webglprogram) |
| `index` | `number` |

#### Returns

``null`` \| [`WebGLActiveInfo`](../modules/input._internal_.md#webglactiveinfo)

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[getActiveAttrib](input._internal_.WebGLRenderingContextBase.md#getactiveattrib)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16040

___

### getActiveUniform

▸ **getActiveUniform**(`program`, `index`): ``null`` \| [`WebGLActiveInfo`](../modules/input._internal_.md#webglactiveinfo)

#### Parameters

| Name | Type |
| :------ | :------ |
| `program` | [`WebGLProgram`](../modules/input._internal_.md#webglprogram) |
| `index` | `number` |

#### Returns

``null`` \| [`WebGLActiveInfo`](../modules/input._internal_.md#webglactiveinfo)

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[getActiveUniform](input._internal_.WebGLRenderingContextBase.md#getactiveuniform)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16041

___

### getAttachedShaders

▸ **getAttachedShaders**(`program`): ``null`` \| [`WebGLShader`](../modules/input._internal_.md#webglshader)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `program` | [`WebGLProgram`](../modules/input._internal_.md#webglprogram) |

#### Returns

``null`` \| [`WebGLShader`](../modules/input._internal_.md#webglshader)[]

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[getAttachedShaders](input._internal_.WebGLRenderingContextBase.md#getattachedshaders)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16042

___

### getAttribLocation

▸ **getAttribLocation**(`program`, `name`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `program` | [`WebGLProgram`](../modules/input._internal_.md#webglprogram) |
| `name` | `string` |

#### Returns

`number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[getAttribLocation](input._internal_.WebGLRenderingContextBase.md#getattriblocation)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16043

___

### getBufferParameter

▸ **getBufferParameter**(`target`, `pname`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `number` |
| `pname` | `number` |

#### Returns

`any`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[getBufferParameter](input._internal_.WebGLRenderingContextBase.md#getbufferparameter)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16044

___

### getContextAttributes

▸ **getContextAttributes**(): ``null`` \| [`WebGLContextAttributes`](input._internal_.WebGLContextAttributes.md)

#### Returns

``null`` \| [`WebGLContextAttributes`](input._internal_.WebGLContextAttributes.md)

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[getContextAttributes](input._internal_.WebGLRenderingContextBase.md#getcontextattributes)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16045

___

### getError

▸ **getError**(): `number`

#### Returns

`number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[getError](input._internal_.WebGLRenderingContextBase.md#geterror)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16046

___

### getExtension

▸ **getExtension**(`extensionName`): ``null`` \| [`EXT_blend_minmax`](input._internal_.EXT_blend_minmax.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `extensionName` | ``"EXT_blend_minmax"`` |

#### Returns

``null`` \| [`EXT_blend_minmax`](input._internal_.EXT_blend_minmax.md)

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[getExtension](input._internal_.WebGLRenderingContextBase.md#getextension)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16047

▸ **getExtension**(`extensionName`): ``null`` \| [`EXT_color_buffer_float`](input._internal_.EXT_color_buffer_float.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `extensionName` | ``"EXT_color_buffer_float"`` |

#### Returns

``null`` \| [`EXT_color_buffer_float`](input._internal_.EXT_color_buffer_float.md)

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[getExtension](input._internal_.WebGLRenderingContextBase.md#getextension)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16048

▸ **getExtension**(`extensionName`): ``null`` \| [`EXT_color_buffer_half_float`](input._internal_.EXT_color_buffer_half_float.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `extensionName` | ``"EXT_color_buffer_half_float"`` |

#### Returns

``null`` \| [`EXT_color_buffer_half_float`](input._internal_.EXT_color_buffer_half_float.md)

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[getExtension](input._internal_.WebGLRenderingContextBase.md#getextension)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16049

▸ **getExtension**(`extensionName`): ``null`` \| [`EXT_float_blend`](input._internal_.EXT_float_blend.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `extensionName` | ``"EXT_float_blend"`` |

#### Returns

``null`` \| [`EXT_float_blend`](input._internal_.EXT_float_blend.md)

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[getExtension](input._internal_.WebGLRenderingContextBase.md#getextension)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16050

▸ **getExtension**(`extensionName`): ``null`` \| [`EXT_texture_filter_anisotropic`](input._internal_.EXT_texture_filter_anisotropic.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `extensionName` | ``"EXT_texture_filter_anisotropic"`` |

#### Returns

``null`` \| [`EXT_texture_filter_anisotropic`](input._internal_.EXT_texture_filter_anisotropic.md)

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[getExtension](input._internal_.WebGLRenderingContextBase.md#getextension)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16051

▸ **getExtension**(`extensionName`): ``null`` \| [`EXT_frag_depth`](input._internal_.EXT_frag_depth.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `extensionName` | ``"EXT_frag_depth"`` |

#### Returns

``null`` \| [`EXT_frag_depth`](input._internal_.EXT_frag_depth.md)

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[getExtension](input._internal_.WebGLRenderingContextBase.md#getextension)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16052

▸ **getExtension**(`extensionName`): ``null`` \| [`EXT_shader_texture_lod`](input._internal_.EXT_shader_texture_lod.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `extensionName` | ``"EXT_shader_texture_lod"`` |

#### Returns

``null`` \| [`EXT_shader_texture_lod`](input._internal_.EXT_shader_texture_lod.md)

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[getExtension](input._internal_.WebGLRenderingContextBase.md#getextension)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16053

▸ **getExtension**(`extensionName`): ``null`` \| [`EXT_sRGB`](input._internal_.EXT_sRGB.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `extensionName` | ``"EXT_sRGB"`` |

#### Returns

``null`` \| [`EXT_sRGB`](input._internal_.EXT_sRGB.md)

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[getExtension](input._internal_.WebGLRenderingContextBase.md#getextension)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16054

▸ **getExtension**(`extensionName`): ``null`` \| [`KHR_parallel_shader_compile`](input._internal_.KHR_parallel_shader_compile.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `extensionName` | ``"KHR_parallel_shader_compile"`` |

#### Returns

``null`` \| [`KHR_parallel_shader_compile`](input._internal_.KHR_parallel_shader_compile.md)

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[getExtension](input._internal_.WebGLRenderingContextBase.md#getextension)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16055

▸ **getExtension**(`extensionName`): ``null`` \| [`OES_vertex_array_object`](input._internal_.OES_vertex_array_object.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `extensionName` | ``"OES_vertex_array_object"`` |

#### Returns

``null`` \| [`OES_vertex_array_object`](input._internal_.OES_vertex_array_object.md)

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[getExtension](input._internal_.WebGLRenderingContextBase.md#getextension)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16056

▸ **getExtension**(`extensionName`): ``null`` \| [`OVR_multiview2`](input._internal_.OVR_multiview2.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `extensionName` | ``"OVR_multiview2"`` |

#### Returns

``null`` \| [`OVR_multiview2`](input._internal_.OVR_multiview2.md)

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[getExtension](input._internal_.WebGLRenderingContextBase.md#getextension)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16057

▸ **getExtension**(`extensionName`): ``null`` \| [`WEBGL_color_buffer_float`](input._internal_.WEBGL_color_buffer_float.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `extensionName` | ``"WEBGL_color_buffer_float"`` |

#### Returns

``null`` \| [`WEBGL_color_buffer_float`](input._internal_.WEBGL_color_buffer_float.md)

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[getExtension](input._internal_.WebGLRenderingContextBase.md#getextension)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16058

▸ **getExtension**(`extensionName`): ``null`` \| [`WEBGL_compressed_texture_astc`](input._internal_.WEBGL_compressed_texture_astc.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `extensionName` | ``"WEBGL_compressed_texture_astc"`` |

#### Returns

``null`` \| [`WEBGL_compressed_texture_astc`](input._internal_.WEBGL_compressed_texture_astc.md)

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[getExtension](input._internal_.WebGLRenderingContextBase.md#getextension)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16059

▸ **getExtension**(`extensionName`): ``null`` \| [`WEBGL_compressed_texture_etc`](input._internal_.WEBGL_compressed_texture_etc.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `extensionName` | ``"WEBGL_compressed_texture_etc"`` |

#### Returns

``null`` \| [`WEBGL_compressed_texture_etc`](input._internal_.WEBGL_compressed_texture_etc.md)

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[getExtension](input._internal_.WebGLRenderingContextBase.md#getextension)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16060

▸ **getExtension**(`extensionName`): ``null`` \| [`WEBGL_compressed_texture_etc1`](input._internal_.WEBGL_compressed_texture_etc1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `extensionName` | ``"WEBGL_compressed_texture_etc1"`` |

#### Returns

``null`` \| [`WEBGL_compressed_texture_etc1`](input._internal_.WEBGL_compressed_texture_etc1.md)

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[getExtension](input._internal_.WebGLRenderingContextBase.md#getextension)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16061

▸ **getExtension**(`extensionName`): ``null`` \| [`WEBGL_compressed_texture_s3tc_srgb`](input._internal_.WEBGL_compressed_texture_s3tc_srgb.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `extensionName` | ``"WEBGL_compressed_texture_s3tc_srgb"`` |

#### Returns

``null`` \| [`WEBGL_compressed_texture_s3tc_srgb`](input._internal_.WEBGL_compressed_texture_s3tc_srgb.md)

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[getExtension](input._internal_.WebGLRenderingContextBase.md#getextension)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16062

▸ **getExtension**(`extensionName`): ``null`` \| [`WEBGL_debug_shaders`](input._internal_.WEBGL_debug_shaders.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `extensionName` | ``"WEBGL_debug_shaders"`` |

#### Returns

``null`` \| [`WEBGL_debug_shaders`](input._internal_.WEBGL_debug_shaders.md)

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[getExtension](input._internal_.WebGLRenderingContextBase.md#getextension)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16063

▸ **getExtension**(`extensionName`): ``null`` \| [`WEBGL_draw_buffers`](input._internal_.WEBGL_draw_buffers.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `extensionName` | ``"WEBGL_draw_buffers"`` |

#### Returns

``null`` \| [`WEBGL_draw_buffers`](input._internal_.WEBGL_draw_buffers.md)

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[getExtension](input._internal_.WebGLRenderingContextBase.md#getextension)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16064

▸ **getExtension**(`extensionName`): ``null`` \| [`WEBGL_lose_context`](input._internal_.WEBGL_lose_context.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `extensionName` | ``"WEBGL_lose_context"`` |

#### Returns

``null`` \| [`WEBGL_lose_context`](input._internal_.WEBGL_lose_context.md)

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[getExtension](input._internal_.WebGLRenderingContextBase.md#getextension)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16065

▸ **getExtension**(`extensionName`): ``null`` \| [`WEBGL_depth_texture`](input._internal_.WEBGL_depth_texture.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `extensionName` | ``"WEBGL_depth_texture"`` |

#### Returns

``null`` \| [`WEBGL_depth_texture`](input._internal_.WEBGL_depth_texture.md)

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[getExtension](input._internal_.WebGLRenderingContextBase.md#getextension)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16066

▸ **getExtension**(`extensionName`): ``null`` \| [`WEBGL_debug_renderer_info`](input._internal_.WEBGL_debug_renderer_info.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `extensionName` | ``"WEBGL_debug_renderer_info"`` |

#### Returns

``null`` \| [`WEBGL_debug_renderer_info`](input._internal_.WEBGL_debug_renderer_info.md)

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[getExtension](input._internal_.WebGLRenderingContextBase.md#getextension)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16067

▸ **getExtension**(`extensionName`): ``null`` \| [`WEBGL_compressed_texture_s3tc`](input._internal_.WEBGL_compressed_texture_s3tc.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `extensionName` | ``"WEBGL_compressed_texture_s3tc"`` |

#### Returns

``null`` \| [`WEBGL_compressed_texture_s3tc`](input._internal_.WEBGL_compressed_texture_s3tc.md)

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[getExtension](input._internal_.WebGLRenderingContextBase.md#getextension)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16068

▸ **getExtension**(`extensionName`): ``null`` \| [`OES_texture_half_float_linear`](input._internal_.OES_texture_half_float_linear.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `extensionName` | ``"OES_texture_half_float_linear"`` |

#### Returns

``null`` \| [`OES_texture_half_float_linear`](input._internal_.OES_texture_half_float_linear.md)

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[getExtension](input._internal_.WebGLRenderingContextBase.md#getextension)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16069

▸ **getExtension**(`extensionName`): ``null`` \| [`OES_texture_half_float`](input._internal_.OES_texture_half_float.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `extensionName` | ``"OES_texture_half_float"`` |

#### Returns

``null`` \| [`OES_texture_half_float`](input._internal_.OES_texture_half_float.md)

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[getExtension](input._internal_.WebGLRenderingContextBase.md#getextension)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16070

▸ **getExtension**(`extensionName`): ``null`` \| [`OES_texture_float_linear`](input._internal_.OES_texture_float_linear.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `extensionName` | ``"OES_texture_float_linear"`` |

#### Returns

``null`` \| [`OES_texture_float_linear`](input._internal_.OES_texture_float_linear.md)

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[getExtension](input._internal_.WebGLRenderingContextBase.md#getextension)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16071

▸ **getExtension**(`extensionName`): ``null`` \| [`OES_texture_float`](input._internal_.OES_texture_float.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `extensionName` | ``"OES_texture_float"`` |

#### Returns

``null`` \| [`OES_texture_float`](input._internal_.OES_texture_float.md)

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[getExtension](input._internal_.WebGLRenderingContextBase.md#getextension)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16072

▸ **getExtension**(`extensionName`): ``null`` \| [`OES_standard_derivatives`](input._internal_.OES_standard_derivatives.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `extensionName` | ``"OES_standard_derivatives"`` |

#### Returns

``null`` \| [`OES_standard_derivatives`](input._internal_.OES_standard_derivatives.md)

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[getExtension](input._internal_.WebGLRenderingContextBase.md#getextension)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16073

▸ **getExtension**(`extensionName`): ``null`` \| [`OES_element_index_uint`](input._internal_.OES_element_index_uint.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `extensionName` | ``"OES_element_index_uint"`` |

#### Returns

``null`` \| [`OES_element_index_uint`](input._internal_.OES_element_index_uint.md)

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[getExtension](input._internal_.WebGLRenderingContextBase.md#getextension)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16074

▸ **getExtension**(`extensionName`): ``null`` \| [`ANGLE_instanced_arrays`](input._internal_.ANGLE_instanced_arrays.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `extensionName` | ``"ANGLE_instanced_arrays"`` |

#### Returns

``null`` \| [`ANGLE_instanced_arrays`](input._internal_.ANGLE_instanced_arrays.md)

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[getExtension](input._internal_.WebGLRenderingContextBase.md#getextension)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16075

▸ **getExtension**(`name`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`any`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[getExtension](input._internal_.WebGLRenderingContextBase.md#getextension)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16076

___

### getFramebufferAttachmentParameter

▸ **getFramebufferAttachmentParameter**(`target`, `attachment`, `pname`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `number` |
| `attachment` | `number` |
| `pname` | `number` |

#### Returns

`any`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[getFramebufferAttachmentParameter](input._internal_.WebGLRenderingContextBase.md#getframebufferattachmentparameter)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16077

___

### getParameter

▸ **getParameter**(`pname`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pname` | `number` |

#### Returns

`any`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[getParameter](input._internal_.WebGLRenderingContextBase.md#getparameter)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16078

___

### getProgramInfoLog

▸ **getProgramInfoLog**(`program`): ``null`` \| `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `program` | [`WebGLProgram`](../modules/input._internal_.md#webglprogram) |

#### Returns

``null`` \| `string`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[getProgramInfoLog](input._internal_.WebGLRenderingContextBase.md#getprograminfolog)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16079

___

### getProgramParameter

▸ **getProgramParameter**(`program`, `pname`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `program` | [`WebGLProgram`](../modules/input._internal_.md#webglprogram) |
| `pname` | `number` |

#### Returns

`any`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[getProgramParameter](input._internal_.WebGLRenderingContextBase.md#getprogramparameter)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16080

___

### getRenderbufferParameter

▸ **getRenderbufferParameter**(`target`, `pname`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `number` |
| `pname` | `number` |

#### Returns

`any`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[getRenderbufferParameter](input._internal_.WebGLRenderingContextBase.md#getrenderbufferparameter)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16081

___

### getShaderInfoLog

▸ **getShaderInfoLog**(`shader`): ``null`` \| `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shader` | [`WebGLShader`](../modules/input._internal_.md#webglshader) |

#### Returns

``null`` \| `string`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[getShaderInfoLog](input._internal_.WebGLRenderingContextBase.md#getshaderinfolog)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16082

___

### getShaderParameter

▸ **getShaderParameter**(`shader`, `pname`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shader` | [`WebGLShader`](../modules/input._internal_.md#webglshader) |
| `pname` | `number` |

#### Returns

`any`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[getShaderParameter](input._internal_.WebGLRenderingContextBase.md#getshaderparameter)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16083

___

### getShaderPrecisionFormat

▸ **getShaderPrecisionFormat**(`shadertype`, `precisiontype`): ``null`` \| [`WebGLShaderPrecisionFormat`](../modules/input._internal_.md#webglshaderprecisionformat)

#### Parameters

| Name | Type |
| :------ | :------ |
| `shadertype` | `number` |
| `precisiontype` | `number` |

#### Returns

``null`` \| [`WebGLShaderPrecisionFormat`](../modules/input._internal_.md#webglshaderprecisionformat)

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[getShaderPrecisionFormat](input._internal_.WebGLRenderingContextBase.md#getshaderprecisionformat)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16084

___

### getShaderSource

▸ **getShaderSource**(`shader`): ``null`` \| `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shader` | [`WebGLShader`](../modules/input._internal_.md#webglshader) |

#### Returns

``null`` \| `string`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[getShaderSource](input._internal_.WebGLRenderingContextBase.md#getshadersource)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16085

___

### getSupportedExtensions

▸ **getSupportedExtensions**(): ``null`` \| `string`[]

#### Returns

``null`` \| `string`[]

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[getSupportedExtensions](input._internal_.WebGLRenderingContextBase.md#getsupportedextensions)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16086

___

### getTexParameter

▸ **getTexParameter**(`target`, `pname`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `number` |
| `pname` | `number` |

#### Returns

`any`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[getTexParameter](input._internal_.WebGLRenderingContextBase.md#gettexparameter)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16087

___

### getUniform

▸ **getUniform**(`program`, `location`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `program` | [`WebGLProgram`](../modules/input._internal_.md#webglprogram) |
| `location` | [`WebGLUniformLocation`](../modules/input._internal_.md#webgluniformlocation) |

#### Returns

`any`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[getUniform](input._internal_.WebGLRenderingContextBase.md#getuniform)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16088

___

### getUniformLocation

▸ **getUniformLocation**(`program`, `name`): ``null`` \| [`WebGLUniformLocation`](../modules/input._internal_.md#webgluniformlocation)

#### Parameters

| Name | Type |
| :------ | :------ |
| `program` | [`WebGLProgram`](../modules/input._internal_.md#webglprogram) |
| `name` | `string` |

#### Returns

``null`` \| [`WebGLUniformLocation`](../modules/input._internal_.md#webgluniformlocation)

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[getUniformLocation](input._internal_.WebGLRenderingContextBase.md#getuniformlocation)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16089

___

### getVertexAttrib

▸ **getVertexAttrib**(`index`, `pname`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |
| `pname` | `number` |

#### Returns

`any`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[getVertexAttrib](input._internal_.WebGLRenderingContextBase.md#getvertexattrib)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16090

___

### getVertexAttribOffset

▸ **getVertexAttribOffset**(`index`, `pname`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |
| `pname` | `number` |

#### Returns

`number`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[getVertexAttribOffset](input._internal_.WebGLRenderingContextBase.md#getvertexattriboffset)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16091

___

### hint

▸ **hint**(`target`, `mode`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `number` |
| `mode` | `number` |

#### Returns

`void`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[hint](input._internal_.WebGLRenderingContextBase.md#hint)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16092

___

### isBuffer

▸ **isBuffer**(`buffer`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `buffer` | ``null`` \| [`WebGLBuffer`](../modules/input._internal_.md#webglbuffer) |

#### Returns

`boolean`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[isBuffer](input._internal_.WebGLRenderingContextBase.md#isbuffer)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16093

___

### isContextLost

▸ **isContextLost**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[isContextLost](input._internal_.WebGLRenderingContextBase.md#iscontextlost)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16094

___

### isEnabled

▸ **isEnabled**(`cap`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cap` | `number` |

#### Returns

`boolean`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[isEnabled](input._internal_.WebGLRenderingContextBase.md#isenabled)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16095

___

### isFramebuffer

▸ **isFramebuffer**(`framebuffer`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `framebuffer` | ``null`` \| [`WebGLFramebuffer`](../modules/input._internal_.md#webglframebuffer) |

#### Returns

`boolean`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[isFramebuffer](input._internal_.WebGLRenderingContextBase.md#isframebuffer)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16096

___

### isProgram

▸ **isProgram**(`program`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `program` | ``null`` \| [`WebGLProgram`](../modules/input._internal_.md#webglprogram) |

#### Returns

`boolean`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[isProgram](input._internal_.WebGLRenderingContextBase.md#isprogram)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16097

___

### isRenderbuffer

▸ **isRenderbuffer**(`renderbuffer`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `renderbuffer` | ``null`` \| [`WebGLRenderbuffer`](../modules/input._internal_.md#webglrenderbuffer) |

#### Returns

`boolean`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[isRenderbuffer](input._internal_.WebGLRenderingContextBase.md#isrenderbuffer)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16098

___

### isShader

▸ **isShader**(`shader`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shader` | ``null`` \| [`WebGLShader`](../modules/input._internal_.md#webglshader) |

#### Returns

`boolean`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[isShader](input._internal_.WebGLRenderingContextBase.md#isshader)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16099

___

### isTexture

▸ **isTexture**(`texture`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `texture` | ``null`` \| [`WebGLTexture`](../modules/input._internal_.md#webgltexture) |

#### Returns

`boolean`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[isTexture](input._internal_.WebGLRenderingContextBase.md#istexture)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16100

___

### lineWidth

▸ **lineWidth**(`width`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `width` | `number` |

#### Returns

`void`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[lineWidth](input._internal_.WebGLRenderingContextBase.md#linewidth)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16101

___

### linkProgram

▸ **linkProgram**(`program`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `program` | [`WebGLProgram`](../modules/input._internal_.md#webglprogram) |

#### Returns

`void`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[linkProgram](input._internal_.WebGLRenderingContextBase.md#linkprogram)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16102

___

### pixelStorei

▸ **pixelStorei**(`pname`, `param`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pname` | `number` |
| `param` | `number` \| `boolean` |

#### Returns

`void`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[pixelStorei](input._internal_.WebGLRenderingContextBase.md#pixelstorei)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16103

___

### polygonOffset

▸ **polygonOffset**(`factor`, `units`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `factor` | `number` |
| `units` | `number` |

#### Returns

`void`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[polygonOffset](input._internal_.WebGLRenderingContextBase.md#polygonoffset)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16104

___

### readPixels

▸ **readPixels**(`x`, `y`, `width`, `height`, `format`, `type`, `pixels`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |
| `width` | `number` |
| `height` | `number` |
| `format` | `number` |
| `type` | `number` |
| `pixels` | ``null`` \| [`ArrayBufferView`](input._internal_.ArrayBufferView.md) |

#### Returns

`void`

#### Inherited from

[WebGLRenderingContextOverloads](input._internal_.WebGLRenderingContextOverloads.md).[readPixels](input._internal_.WebGLRenderingContextOverloads.md#readpixels)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16441

___

### renderbufferStorage

▸ **renderbufferStorage**(`target`, `internalformat`, `width`, `height`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `number` |
| `internalformat` | `number` |
| `width` | `number` |
| `height` | `number` |

#### Returns

`void`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[renderbufferStorage](input._internal_.WebGLRenderingContextBase.md#renderbufferstorage)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16105

___

### sampleCoverage

▸ **sampleCoverage**(`value`, `invert`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |
| `invert` | `boolean` |

#### Returns

`void`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[sampleCoverage](input._internal_.WebGLRenderingContextBase.md#samplecoverage)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16106

___

### scissor

▸ **scissor**(`x`, `y`, `width`, `height`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |
| `width` | `number` |
| `height` | `number` |

#### Returns

`void`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[scissor](input._internal_.WebGLRenderingContextBase.md#scissor)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16107

___

### shaderSource

▸ **shaderSource**(`shader`, `source`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shader` | [`WebGLShader`](../modules/input._internal_.md#webglshader) |
| `source` | `string` |

#### Returns

`void`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[shaderSource](input._internal_.WebGLRenderingContextBase.md#shadersource)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16108

___

### stencilFunc

▸ **stencilFunc**(`func`, `ref`, `mask`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `func` | `number` |
| `ref` | `number` |
| `mask` | `number` |

#### Returns

`void`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[stencilFunc](input._internal_.WebGLRenderingContextBase.md#stencilfunc)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16109

___

### stencilFuncSeparate

▸ **stencilFuncSeparate**(`face`, `func`, `ref`, `mask`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `face` | `number` |
| `func` | `number` |
| `ref` | `number` |
| `mask` | `number` |

#### Returns

`void`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[stencilFuncSeparate](input._internal_.WebGLRenderingContextBase.md#stencilfuncseparate)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16110

___

### stencilMask

▸ **stencilMask**(`mask`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `mask` | `number` |

#### Returns

`void`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[stencilMask](input._internal_.WebGLRenderingContextBase.md#stencilmask)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16111

___

### stencilMaskSeparate

▸ **stencilMaskSeparate**(`face`, `mask`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `face` | `number` |
| `mask` | `number` |

#### Returns

`void`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[stencilMaskSeparate](input._internal_.WebGLRenderingContextBase.md#stencilmaskseparate)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16112

___

### stencilOp

▸ **stencilOp**(`fail`, `zfail`, `zpass`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fail` | `number` |
| `zfail` | `number` |
| `zpass` | `number` |

#### Returns

`void`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[stencilOp](input._internal_.WebGLRenderingContextBase.md#stencilop)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16113

___

### stencilOpSeparate

▸ **stencilOpSeparate**(`face`, `fail`, `zfail`, `zpass`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `face` | `number` |
| `fail` | `number` |
| `zfail` | `number` |
| `zpass` | `number` |

#### Returns

`void`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[stencilOpSeparate](input._internal_.WebGLRenderingContextBase.md#stencilopseparate)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16114

___

### texImage2D

▸ **texImage2D**(`target`, `level`, `internalformat`, `width`, `height`, `border`, `format`, `type`, `pixels`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `number` |
| `level` | `number` |
| `internalformat` | `number` |
| `width` | `number` |
| `height` | `number` |
| `border` | `number` |
| `format` | `number` |
| `type` | `number` |
| `pixels` | ``null`` \| [`ArrayBufferView`](input._internal_.ArrayBufferView.md) |

#### Returns

`void`

#### Inherited from

[WebGLRenderingContextOverloads](input._internal_.WebGLRenderingContextOverloads.md).[texImage2D](input._internal_.WebGLRenderingContextOverloads.md#teximage2d)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16442

▸ **texImage2D**(`target`, `level`, `internalformat`, `format`, `type`, `source`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `number` |
| `level` | `number` |
| `internalformat` | `number` |
| `format` | `number` |
| `type` | `number` |
| `source` | [`TexImageSource`](../modules/input._internal_.md#teximagesource) |

#### Returns

`void`

#### Inherited from

[WebGLRenderingContextOverloads](input._internal_.WebGLRenderingContextOverloads.md).[texImage2D](input._internal_.WebGLRenderingContextOverloads.md#teximage2d)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16443

___

### texParameterf

▸ **texParameterf**(`target`, `pname`, `param`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `number` |
| `pname` | `number` |
| `param` | `number` |

#### Returns

`void`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[texParameterf](input._internal_.WebGLRenderingContextBase.md#texparameterf)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16115

___

### texParameteri

▸ **texParameteri**(`target`, `pname`, `param`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `number` |
| `pname` | `number` |
| `param` | `number` |

#### Returns

`void`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[texParameteri](input._internal_.WebGLRenderingContextBase.md#texparameteri)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16116

___

### texSubImage2D

▸ **texSubImage2D**(`target`, `level`, `xoffset`, `yoffset`, `width`, `height`, `format`, `type`, `pixels`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `number` |
| `level` | `number` |
| `xoffset` | `number` |
| `yoffset` | `number` |
| `width` | `number` |
| `height` | `number` |
| `format` | `number` |
| `type` | `number` |
| `pixels` | ``null`` \| [`ArrayBufferView`](input._internal_.ArrayBufferView.md) |

#### Returns

`void`

#### Inherited from

[WebGLRenderingContextOverloads](input._internal_.WebGLRenderingContextOverloads.md).[texSubImage2D](input._internal_.WebGLRenderingContextOverloads.md#texsubimage2d)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16444

▸ **texSubImage2D**(`target`, `level`, `xoffset`, `yoffset`, `format`, `type`, `source`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `number` |
| `level` | `number` |
| `xoffset` | `number` |
| `yoffset` | `number` |
| `format` | `number` |
| `type` | `number` |
| `source` | [`TexImageSource`](../modules/input._internal_.md#teximagesource) |

#### Returns

`void`

#### Inherited from

[WebGLRenderingContextOverloads](input._internal_.WebGLRenderingContextOverloads.md).[texSubImage2D](input._internal_.WebGLRenderingContextOverloads.md#texsubimage2d)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16445

___

### uniform1f

▸ **uniform1f**(`location`, `x`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `location` | ``null`` \| [`WebGLUniformLocation`](../modules/input._internal_.md#webgluniformlocation) |
| `x` | `number` |

#### Returns

`void`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[uniform1f](input._internal_.WebGLRenderingContextBase.md#uniform1f)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16117

___

### uniform1fv

▸ **uniform1fv**(`location`, `v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `location` | ``null`` \| [`WebGLUniformLocation`](../modules/input._internal_.md#webgluniformlocation) |
| `v` | [`Float32List`](../modules/input._internal_.md#float32list) |

#### Returns

`void`

#### Inherited from

[WebGLRenderingContextOverloads](input._internal_.WebGLRenderingContextOverloads.md).[uniform1fv](input._internal_.WebGLRenderingContextOverloads.md#uniform1fv)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16446

___

### uniform1i

▸ **uniform1i**(`location`, `x`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `location` | ``null`` \| [`WebGLUniformLocation`](../modules/input._internal_.md#webgluniformlocation) |
| `x` | `number` |

#### Returns

`void`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[uniform1i](input._internal_.WebGLRenderingContextBase.md#uniform1i)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16118

___

### uniform1iv

▸ **uniform1iv**(`location`, `v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `location` | ``null`` \| [`WebGLUniformLocation`](../modules/input._internal_.md#webgluniformlocation) |
| `v` | [`Int32List`](../modules/input._internal_.md#int32list) |

#### Returns

`void`

#### Inherited from

[WebGLRenderingContextOverloads](input._internal_.WebGLRenderingContextOverloads.md).[uniform1iv](input._internal_.WebGLRenderingContextOverloads.md#uniform1iv)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16447

___

### uniform2f

▸ **uniform2f**(`location`, `x`, `y`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `location` | ``null`` \| [`WebGLUniformLocation`](../modules/input._internal_.md#webgluniformlocation) |
| `x` | `number` |
| `y` | `number` |

#### Returns

`void`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[uniform2f](input._internal_.WebGLRenderingContextBase.md#uniform2f)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16119

___

### uniform2fv

▸ **uniform2fv**(`location`, `v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `location` | ``null`` \| [`WebGLUniformLocation`](../modules/input._internal_.md#webgluniformlocation) |
| `v` | [`Float32List`](../modules/input._internal_.md#float32list) |

#### Returns

`void`

#### Inherited from

[WebGLRenderingContextOverloads](input._internal_.WebGLRenderingContextOverloads.md).[uniform2fv](input._internal_.WebGLRenderingContextOverloads.md#uniform2fv)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16448

___

### uniform2i

▸ **uniform2i**(`location`, `x`, `y`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `location` | ``null`` \| [`WebGLUniformLocation`](../modules/input._internal_.md#webgluniformlocation) |
| `x` | `number` |
| `y` | `number` |

#### Returns

`void`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[uniform2i](input._internal_.WebGLRenderingContextBase.md#uniform2i)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16120

___

### uniform2iv

▸ **uniform2iv**(`location`, `v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `location` | ``null`` \| [`WebGLUniformLocation`](../modules/input._internal_.md#webgluniformlocation) |
| `v` | [`Int32List`](../modules/input._internal_.md#int32list) |

#### Returns

`void`

#### Inherited from

[WebGLRenderingContextOverloads](input._internal_.WebGLRenderingContextOverloads.md).[uniform2iv](input._internal_.WebGLRenderingContextOverloads.md#uniform2iv)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16449

___

### uniform3f

▸ **uniform3f**(`location`, `x`, `y`, `z`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `location` | ``null`` \| [`WebGLUniformLocation`](../modules/input._internal_.md#webgluniformlocation) |
| `x` | `number` |
| `y` | `number` |
| `z` | `number` |

#### Returns

`void`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[uniform3f](input._internal_.WebGLRenderingContextBase.md#uniform3f)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16121

___

### uniform3fv

▸ **uniform3fv**(`location`, `v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `location` | ``null`` \| [`WebGLUniformLocation`](../modules/input._internal_.md#webgluniformlocation) |
| `v` | [`Float32List`](../modules/input._internal_.md#float32list) |

#### Returns

`void`

#### Inherited from

[WebGLRenderingContextOverloads](input._internal_.WebGLRenderingContextOverloads.md).[uniform3fv](input._internal_.WebGLRenderingContextOverloads.md#uniform3fv)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16450

___

### uniform3i

▸ **uniform3i**(`location`, `x`, `y`, `z`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `location` | ``null`` \| [`WebGLUniformLocation`](../modules/input._internal_.md#webgluniformlocation) |
| `x` | `number` |
| `y` | `number` |
| `z` | `number` |

#### Returns

`void`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[uniform3i](input._internal_.WebGLRenderingContextBase.md#uniform3i)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16122

___

### uniform3iv

▸ **uniform3iv**(`location`, `v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `location` | ``null`` \| [`WebGLUniformLocation`](../modules/input._internal_.md#webgluniformlocation) |
| `v` | [`Int32List`](../modules/input._internal_.md#int32list) |

#### Returns

`void`

#### Inherited from

[WebGLRenderingContextOverloads](input._internal_.WebGLRenderingContextOverloads.md).[uniform3iv](input._internal_.WebGLRenderingContextOverloads.md#uniform3iv)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16451

___

### uniform4f

▸ **uniform4f**(`location`, `x`, `y`, `z`, `w`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `location` | ``null`` \| [`WebGLUniformLocation`](../modules/input._internal_.md#webgluniformlocation) |
| `x` | `number` |
| `y` | `number` |
| `z` | `number` |
| `w` | `number` |

#### Returns

`void`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[uniform4f](input._internal_.WebGLRenderingContextBase.md#uniform4f)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16123

___

### uniform4fv

▸ **uniform4fv**(`location`, `v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `location` | ``null`` \| [`WebGLUniformLocation`](../modules/input._internal_.md#webgluniformlocation) |
| `v` | [`Float32List`](../modules/input._internal_.md#float32list) |

#### Returns

`void`

#### Inherited from

[WebGLRenderingContextOverloads](input._internal_.WebGLRenderingContextOverloads.md).[uniform4fv](input._internal_.WebGLRenderingContextOverloads.md#uniform4fv)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16452

___

### uniform4i

▸ **uniform4i**(`location`, `x`, `y`, `z`, `w`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `location` | ``null`` \| [`WebGLUniformLocation`](../modules/input._internal_.md#webgluniformlocation) |
| `x` | `number` |
| `y` | `number` |
| `z` | `number` |
| `w` | `number` |

#### Returns

`void`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[uniform4i](input._internal_.WebGLRenderingContextBase.md#uniform4i)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16124

___

### uniform4iv

▸ **uniform4iv**(`location`, `v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `location` | ``null`` \| [`WebGLUniformLocation`](../modules/input._internal_.md#webgluniformlocation) |
| `v` | [`Int32List`](../modules/input._internal_.md#int32list) |

#### Returns

`void`

#### Inherited from

[WebGLRenderingContextOverloads](input._internal_.WebGLRenderingContextOverloads.md).[uniform4iv](input._internal_.WebGLRenderingContextOverloads.md#uniform4iv)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16453

___

### uniformMatrix2fv

▸ **uniformMatrix2fv**(`location`, `transpose`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `location` | ``null`` \| [`WebGLUniformLocation`](../modules/input._internal_.md#webgluniformlocation) |
| `transpose` | `boolean` |
| `value` | [`Float32List`](../modules/input._internal_.md#float32list) |

#### Returns

`void`

#### Inherited from

[WebGLRenderingContextOverloads](input._internal_.WebGLRenderingContextOverloads.md).[uniformMatrix2fv](input._internal_.WebGLRenderingContextOverloads.md#uniformmatrix2fv)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16454

___

### uniformMatrix3fv

▸ **uniformMatrix3fv**(`location`, `transpose`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `location` | ``null`` \| [`WebGLUniformLocation`](../modules/input._internal_.md#webgluniformlocation) |
| `transpose` | `boolean` |
| `value` | [`Float32List`](../modules/input._internal_.md#float32list) |

#### Returns

`void`

#### Inherited from

[WebGLRenderingContextOverloads](input._internal_.WebGLRenderingContextOverloads.md).[uniformMatrix3fv](input._internal_.WebGLRenderingContextOverloads.md#uniformmatrix3fv)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16455

___

### uniformMatrix4fv

▸ **uniformMatrix4fv**(`location`, `transpose`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `location` | ``null`` \| [`WebGLUniformLocation`](../modules/input._internal_.md#webgluniformlocation) |
| `transpose` | `boolean` |
| `value` | [`Float32List`](../modules/input._internal_.md#float32list) |

#### Returns

`void`

#### Inherited from

[WebGLRenderingContextOverloads](input._internal_.WebGLRenderingContextOverloads.md).[uniformMatrix4fv](input._internal_.WebGLRenderingContextOverloads.md#uniformmatrix4fv)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16456

___

### useProgram

▸ **useProgram**(`program`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `program` | ``null`` \| [`WebGLProgram`](../modules/input._internal_.md#webglprogram) |

#### Returns

`void`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[useProgram](input._internal_.WebGLRenderingContextBase.md#useprogram)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16125

___

### validateProgram

▸ **validateProgram**(`program`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `program` | [`WebGLProgram`](../modules/input._internal_.md#webglprogram) |

#### Returns

`void`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[validateProgram](input._internal_.WebGLRenderingContextBase.md#validateprogram)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16126

___

### vertexAttrib1f

▸ **vertexAttrib1f**(`index`, `x`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |
| `x` | `number` |

#### Returns

`void`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[vertexAttrib1f](input._internal_.WebGLRenderingContextBase.md#vertexattrib1f)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16127

___

### vertexAttrib1fv

▸ **vertexAttrib1fv**(`index`, `values`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |
| `values` | [`Float32List`](../modules/input._internal_.md#float32list) |

#### Returns

`void`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[vertexAttrib1fv](input._internal_.WebGLRenderingContextBase.md#vertexattrib1fv)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16128

___

### vertexAttrib2f

▸ **vertexAttrib2f**(`index`, `x`, `y`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |
| `x` | `number` |
| `y` | `number` |

#### Returns

`void`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[vertexAttrib2f](input._internal_.WebGLRenderingContextBase.md#vertexattrib2f)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16129

___

### vertexAttrib2fv

▸ **vertexAttrib2fv**(`index`, `values`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |
| `values` | [`Float32List`](../modules/input._internal_.md#float32list) |

#### Returns

`void`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[vertexAttrib2fv](input._internal_.WebGLRenderingContextBase.md#vertexattrib2fv)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16130

___

### vertexAttrib3f

▸ **vertexAttrib3f**(`index`, `x`, `y`, `z`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |
| `x` | `number` |
| `y` | `number` |
| `z` | `number` |

#### Returns

`void`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[vertexAttrib3f](input._internal_.WebGLRenderingContextBase.md#vertexattrib3f)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16131

___

### vertexAttrib3fv

▸ **vertexAttrib3fv**(`index`, `values`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |
| `values` | [`Float32List`](../modules/input._internal_.md#float32list) |

#### Returns

`void`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[vertexAttrib3fv](input._internal_.WebGLRenderingContextBase.md#vertexattrib3fv)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16132

___

### vertexAttrib4f

▸ **vertexAttrib4f**(`index`, `x`, `y`, `z`, `w`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |
| `x` | `number` |
| `y` | `number` |
| `z` | `number` |
| `w` | `number` |

#### Returns

`void`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[vertexAttrib4f](input._internal_.WebGLRenderingContextBase.md#vertexattrib4f)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16133

___

### vertexAttrib4fv

▸ **vertexAttrib4fv**(`index`, `values`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |
| `values` | [`Float32List`](../modules/input._internal_.md#float32list) |

#### Returns

`void`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[vertexAttrib4fv](input._internal_.WebGLRenderingContextBase.md#vertexattrib4fv)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16134

___

### vertexAttribPointer

▸ **vertexAttribPointer**(`index`, `size`, `type`, `normalized`, `stride`, `offset`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |
| `size` | `number` |
| `type` | `number` |
| `normalized` | `boolean` |
| `stride` | `number` |
| `offset` | `number` |

#### Returns

`void`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[vertexAttribPointer](input._internal_.WebGLRenderingContextBase.md#vertexattribpointer)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16135

___

### viewport

▸ **viewport**(`x`, `y`, `width`, `height`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |
| `width` | `number` |
| `height` | `number` |

#### Returns

`void`

#### Inherited from

[WebGLRenderingContextBase](input._internal_.WebGLRenderingContextBase.md).[viewport](input._internal_.WebGLRenderingContextBase.md#viewport-1)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16136
