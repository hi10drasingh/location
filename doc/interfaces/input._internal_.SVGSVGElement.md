[Droom Google Location Plugin - v1.0.11](../README.md) / [Exports](../modules.md) / [input](../modules/input.md) / [<internal\>](../modules/input._internal_.md) / SVGSVGElement

# Interface: SVGSVGElement

[input](../modules/input.md).[<internal>](../modules/input._internal_.md).SVGSVGElement

Provides access to the properties of <svg> elements, as well as methods to manipulate them. This interface contains also various miscellaneous commonly-used utility methods, such as matrix operations and the ability to control the time of redraw on visual rendering devices.

## Hierarchy

- [`SVGGraphicsElement`](../modules/input._internal_.md#svggraphicselement)

- [`SVGFitToViewBox`](input._internal_.SVGFitToViewBox.md)

- [`WindowEventHandlers`](input._internal_.WindowEventHandlers.md)

  ↳ **`SVGSVGElement`**

## Table of contents

### Properties

- [ATTRIBUTE\_NODE](input._internal_.SVGSVGElement.md#attribute_node)
- [CDATA\_SECTION\_NODE](input._internal_.SVGSVGElement.md#cdata_section_node)
- [COMMENT\_NODE](input._internal_.SVGSVGElement.md#comment_node)
- [DOCUMENT\_FRAGMENT\_NODE](input._internal_.SVGSVGElement.md#document_fragment_node)
- [DOCUMENT\_NODE](input._internal_.SVGSVGElement.md#document_node)
- [DOCUMENT\_POSITION\_CONTAINED\_BY](input._internal_.SVGSVGElement.md#document_position_contained_by)
- [DOCUMENT\_POSITION\_CONTAINS](input._internal_.SVGSVGElement.md#document_position_contains)
- [DOCUMENT\_POSITION\_DISCONNECTED](input._internal_.SVGSVGElement.md#document_position_disconnected)
- [DOCUMENT\_POSITION\_FOLLOWING](input._internal_.SVGSVGElement.md#document_position_following)
- [DOCUMENT\_POSITION\_IMPLEMENTATION\_SPECIFIC](input._internal_.SVGSVGElement.md#document_position_implementation_specific)
- [DOCUMENT\_POSITION\_PRECEDING](input._internal_.SVGSVGElement.md#document_position_preceding)
- [DOCUMENT\_TYPE\_NODE](input._internal_.SVGSVGElement.md#document_type_node)
- [ELEMENT\_NODE](input._internal_.SVGSVGElement.md#element_node)
- [ENTITY\_NODE](input._internal_.SVGSVGElement.md#entity_node)
- [ENTITY\_REFERENCE\_NODE](input._internal_.SVGSVGElement.md#entity_reference_node)
- [NOTATION\_NODE](input._internal_.SVGSVGElement.md#notation_node)
- [PROCESSING\_INSTRUCTION\_NODE](input._internal_.SVGSVGElement.md#processing_instruction_node)
- [TEXT\_NODE](input._internal_.SVGSVGElement.md#text_node)
- [ariaAtomic](input._internal_.SVGSVGElement.md#ariaatomic)
- [ariaAutoComplete](input._internal_.SVGSVGElement.md#ariaautocomplete)
- [ariaBusy](input._internal_.SVGSVGElement.md#ariabusy)
- [ariaChecked](input._internal_.SVGSVGElement.md#ariachecked)
- [ariaColCount](input._internal_.SVGSVGElement.md#ariacolcount)
- [ariaColIndex](input._internal_.SVGSVGElement.md#ariacolindex)
- [ariaColSpan](input._internal_.SVGSVGElement.md#ariacolspan)
- [ariaCurrent](input._internal_.SVGSVGElement.md#ariacurrent)
- [ariaDisabled](input._internal_.SVGSVGElement.md#ariadisabled)
- [ariaExpanded](input._internal_.SVGSVGElement.md#ariaexpanded)
- [ariaHasPopup](input._internal_.SVGSVGElement.md#ariahaspopup)
- [ariaHidden](input._internal_.SVGSVGElement.md#ariahidden)
- [ariaKeyShortcuts](input._internal_.SVGSVGElement.md#ariakeyshortcuts)
- [ariaLabel](input._internal_.SVGSVGElement.md#arialabel)
- [ariaLevel](input._internal_.SVGSVGElement.md#arialevel)
- [ariaLive](input._internal_.SVGSVGElement.md#arialive)
- [ariaModal](input._internal_.SVGSVGElement.md#ariamodal)
- [ariaMultiLine](input._internal_.SVGSVGElement.md#ariamultiline)
- [ariaMultiSelectable](input._internal_.SVGSVGElement.md#ariamultiselectable)
- [ariaOrientation](input._internal_.SVGSVGElement.md#ariaorientation)
- [ariaPlaceholder](input._internal_.SVGSVGElement.md#ariaplaceholder)
- [ariaPosInSet](input._internal_.SVGSVGElement.md#ariaposinset)
- [ariaPressed](input._internal_.SVGSVGElement.md#ariapressed)
- [ariaReadOnly](input._internal_.SVGSVGElement.md#ariareadonly)
- [ariaRequired](input._internal_.SVGSVGElement.md#ariarequired)
- [ariaRoleDescription](input._internal_.SVGSVGElement.md#ariaroledescription)
- [ariaRowCount](input._internal_.SVGSVGElement.md#ariarowcount)
- [ariaRowIndex](input._internal_.SVGSVGElement.md#ariarowindex)
- [ariaRowSpan](input._internal_.SVGSVGElement.md#ariarowspan)
- [ariaSelected](input._internal_.SVGSVGElement.md#ariaselected)
- [ariaSetSize](input._internal_.SVGSVGElement.md#ariasetsize)
- [ariaSort](input._internal_.SVGSVGElement.md#ariasort)
- [ariaValueMax](input._internal_.SVGSVGElement.md#ariavaluemax)
- [ariaValueMin](input._internal_.SVGSVGElement.md#ariavaluemin)
- [ariaValueNow](input._internal_.SVGSVGElement.md#ariavaluenow)
- [ariaValueText](input._internal_.SVGSVGElement.md#ariavaluetext)
- [assignedSlot](input._internal_.SVGSVGElement.md#assignedslot)
- [attributes](input._internal_.SVGSVGElement.md#attributes)
- [autofocus](input._internal_.SVGSVGElement.md#autofocus)
- [baseURI](input._internal_.SVGSVGElement.md#baseuri)
- [childElementCount](input._internal_.SVGSVGElement.md#childelementcount)
- [childNodes](input._internal_.SVGSVGElement.md#childnodes)
- [children](input._internal_.SVGSVGElement.md#children)
- [classList](input._internal_.SVGSVGElement.md#classlist)
- [className](input._internal_.SVGSVGElement.md#classname)
- [clientHeight](input._internal_.SVGSVGElement.md#clientheight)
- [clientLeft](input._internal_.SVGSVGElement.md#clientleft)
- [clientTop](input._internal_.SVGSVGElement.md#clienttop)
- [clientWidth](input._internal_.SVGSVGElement.md#clientwidth)
- [currentScale](input._internal_.SVGSVGElement.md#currentscale)
- [currentTranslate](input._internal_.SVGSVGElement.md#currenttranslate)
- [dataset](input._internal_.SVGSVGElement.md#dataset)
- [firstChild](input._internal_.SVGSVGElement.md#firstchild)
- [firstElementChild](input._internal_.SVGSVGElement.md#firstelementchild)
- [height](input._internal_.SVGSVGElement.md#height)
- [id](input._internal_.SVGSVGElement.md#id)
- [innerHTML](input._internal_.SVGSVGElement.md#innerhtml)
- [isConnected](input._internal_.SVGSVGElement.md#isconnected)
- [lastChild](input._internal_.SVGSVGElement.md#lastchild)
- [lastElementChild](input._internal_.SVGSVGElement.md#lastelementchild)
- [localName](input._internal_.SVGSVGElement.md#localname)
- [namespaceURI](input._internal_.SVGSVGElement.md#namespaceuri)
- [nextElementSibling](input._internal_.SVGSVGElement.md#nextelementsibling)
- [nextSibling](input._internal_.SVGSVGElement.md#nextsibling)
- [nodeName](input._internal_.SVGSVGElement.md#nodename)
- [nodeType](input._internal_.SVGSVGElement.md#nodetype)
- [nodeValue](input._internal_.SVGSVGElement.md#nodevalue)
- [nonce](input._internal_.SVGSVGElement.md#nonce)
- [onabort](input._internal_.SVGSVGElement.md#onabort)
- [onafterprint](input._internal_.SVGSVGElement.md#onafterprint)
- [onanimationcancel](input._internal_.SVGSVGElement.md#onanimationcancel)
- [onanimationend](input._internal_.SVGSVGElement.md#onanimationend)
- [onanimationiteration](input._internal_.SVGSVGElement.md#onanimationiteration)
- [onanimationstart](input._internal_.SVGSVGElement.md#onanimationstart)
- [onauxclick](input._internal_.SVGSVGElement.md#onauxclick)
- [onbeforeprint](input._internal_.SVGSVGElement.md#onbeforeprint)
- [onbeforeunload](input._internal_.SVGSVGElement.md#onbeforeunload)
- [onblur](input._internal_.SVGSVGElement.md#onblur)
- [oncanplay](input._internal_.SVGSVGElement.md#oncanplay)
- [oncanplaythrough](input._internal_.SVGSVGElement.md#oncanplaythrough)
- [onchange](input._internal_.SVGSVGElement.md#onchange)
- [onclick](input._internal_.SVGSVGElement.md#onclick)
- [onclose](input._internal_.SVGSVGElement.md#onclose)
- [oncontextmenu](input._internal_.SVGSVGElement.md#oncontextmenu)
- [oncopy](input._internal_.SVGSVGElement.md#oncopy)
- [oncuechange](input._internal_.SVGSVGElement.md#oncuechange)
- [oncut](input._internal_.SVGSVGElement.md#oncut)
- [ondblclick](input._internal_.SVGSVGElement.md#ondblclick)
- [ondrag](input._internal_.SVGSVGElement.md#ondrag)
- [ondragend](input._internal_.SVGSVGElement.md#ondragend)
- [ondragenter](input._internal_.SVGSVGElement.md#ondragenter)
- [ondragleave](input._internal_.SVGSVGElement.md#ondragleave)
- [ondragover](input._internal_.SVGSVGElement.md#ondragover)
- [ondragstart](input._internal_.SVGSVGElement.md#ondragstart)
- [ondrop](input._internal_.SVGSVGElement.md#ondrop)
- [ondurationchange](input._internal_.SVGSVGElement.md#ondurationchange)
- [onemptied](input._internal_.SVGSVGElement.md#onemptied)
- [onended](input._internal_.SVGSVGElement.md#onended)
- [onerror](input._internal_.SVGSVGElement.md#onerror)
- [onfocus](input._internal_.SVGSVGElement.md#onfocus)
- [onformdata](input._internal_.SVGSVGElement.md#onformdata)
- [onfullscreenchange](input._internal_.SVGSVGElement.md#onfullscreenchange)
- [onfullscreenerror](input._internal_.SVGSVGElement.md#onfullscreenerror)
- [ongamepadconnected](input._internal_.SVGSVGElement.md#ongamepadconnected)
- [ongamepaddisconnected](input._internal_.SVGSVGElement.md#ongamepaddisconnected)
- [ongotpointercapture](input._internal_.SVGSVGElement.md#ongotpointercapture)
- [onhashchange](input._internal_.SVGSVGElement.md#onhashchange)
- [oninput](input._internal_.SVGSVGElement.md#oninput)
- [oninvalid](input._internal_.SVGSVGElement.md#oninvalid)
- [onkeydown](input._internal_.SVGSVGElement.md#onkeydown)
- [onkeypress](input._internal_.SVGSVGElement.md#onkeypress)
- [onkeyup](input._internal_.SVGSVGElement.md#onkeyup)
- [onlanguagechange](input._internal_.SVGSVGElement.md#onlanguagechange)
- [onload](input._internal_.SVGSVGElement.md#onload)
- [onloadeddata](input._internal_.SVGSVGElement.md#onloadeddata)
- [onloadedmetadata](input._internal_.SVGSVGElement.md#onloadedmetadata)
- [onloadstart](input._internal_.SVGSVGElement.md#onloadstart)
- [onlostpointercapture](input._internal_.SVGSVGElement.md#onlostpointercapture)
- [onmessage](input._internal_.SVGSVGElement.md#onmessage)
- [onmessageerror](input._internal_.SVGSVGElement.md#onmessageerror)
- [onmousedown](input._internal_.SVGSVGElement.md#onmousedown)
- [onmouseenter](input._internal_.SVGSVGElement.md#onmouseenter)
- [onmouseleave](input._internal_.SVGSVGElement.md#onmouseleave)
- [onmousemove](input._internal_.SVGSVGElement.md#onmousemove)
- [onmouseout](input._internal_.SVGSVGElement.md#onmouseout)
- [onmouseover](input._internal_.SVGSVGElement.md#onmouseover)
- [onmouseup](input._internal_.SVGSVGElement.md#onmouseup)
- [onoffline](input._internal_.SVGSVGElement.md#onoffline)
- [ononline](input._internal_.SVGSVGElement.md#ononline)
- [onpagehide](input._internal_.SVGSVGElement.md#onpagehide)
- [onpageshow](input._internal_.SVGSVGElement.md#onpageshow)
- [onpaste](input._internal_.SVGSVGElement.md#onpaste)
- [onpause](input._internal_.SVGSVGElement.md#onpause)
- [onplay](input._internal_.SVGSVGElement.md#onplay)
- [onplaying](input._internal_.SVGSVGElement.md#onplaying)
- [onpointercancel](input._internal_.SVGSVGElement.md#onpointercancel)
- [onpointerdown](input._internal_.SVGSVGElement.md#onpointerdown)
- [onpointerenter](input._internal_.SVGSVGElement.md#onpointerenter)
- [onpointerleave](input._internal_.SVGSVGElement.md#onpointerleave)
- [onpointermove](input._internal_.SVGSVGElement.md#onpointermove)
- [onpointerout](input._internal_.SVGSVGElement.md#onpointerout)
- [onpointerover](input._internal_.SVGSVGElement.md#onpointerover)
- [onpointerup](input._internal_.SVGSVGElement.md#onpointerup)
- [onpopstate](input._internal_.SVGSVGElement.md#onpopstate)
- [onprogress](input._internal_.SVGSVGElement.md#onprogress)
- [onratechange](input._internal_.SVGSVGElement.md#onratechange)
- [onrejectionhandled](input._internal_.SVGSVGElement.md#onrejectionhandled)
- [onreset](input._internal_.SVGSVGElement.md#onreset)
- [onresize](input._internal_.SVGSVGElement.md#onresize)
- [onscroll](input._internal_.SVGSVGElement.md#onscroll)
- [onsecuritypolicyviolation](input._internal_.SVGSVGElement.md#onsecuritypolicyviolation)
- [onseeked](input._internal_.SVGSVGElement.md#onseeked)
- [onseeking](input._internal_.SVGSVGElement.md#onseeking)
- [onselect](input._internal_.SVGSVGElement.md#onselect)
- [onselectionchange](input._internal_.SVGSVGElement.md#onselectionchange)
- [onselectstart](input._internal_.SVGSVGElement.md#onselectstart)
- [onslotchange](input._internal_.SVGSVGElement.md#onslotchange)
- [onstalled](input._internal_.SVGSVGElement.md#onstalled)
- [onstorage](input._internal_.SVGSVGElement.md#onstorage)
- [onsubmit](input._internal_.SVGSVGElement.md#onsubmit)
- [onsuspend](input._internal_.SVGSVGElement.md#onsuspend)
- [ontimeupdate](input._internal_.SVGSVGElement.md#ontimeupdate)
- [ontoggle](input._internal_.SVGSVGElement.md#ontoggle)
- [ontouchcancel](input._internal_.SVGSVGElement.md#ontouchcancel)
- [ontouchend](input._internal_.SVGSVGElement.md#ontouchend)
- [ontouchmove](input._internal_.SVGSVGElement.md#ontouchmove)
- [ontouchstart](input._internal_.SVGSVGElement.md#ontouchstart)
- [ontransitioncancel](input._internal_.SVGSVGElement.md#ontransitioncancel)
- [ontransitionend](input._internal_.SVGSVGElement.md#ontransitionend)
- [ontransitionrun](input._internal_.SVGSVGElement.md#ontransitionrun)
- [ontransitionstart](input._internal_.SVGSVGElement.md#ontransitionstart)
- [onunhandledrejection](input._internal_.SVGSVGElement.md#onunhandledrejection)
- [onunload](input._internal_.SVGSVGElement.md#onunload)
- [onvolumechange](input._internal_.SVGSVGElement.md#onvolumechange)
- [onwaiting](input._internal_.SVGSVGElement.md#onwaiting)
- [onwebkitanimationend](input._internal_.SVGSVGElement.md#onwebkitanimationend)
- [onwebkitanimationiteration](input._internal_.SVGSVGElement.md#onwebkitanimationiteration)
- [onwebkitanimationstart](input._internal_.SVGSVGElement.md#onwebkitanimationstart)
- [onwebkittransitionend](input._internal_.SVGSVGElement.md#onwebkittransitionend)
- [onwheel](input._internal_.SVGSVGElement.md#onwheel)
- [outerHTML](input._internal_.SVGSVGElement.md#outerhtml)
- [ownerDocument](input._internal_.SVGSVGElement.md#ownerdocument)
- [ownerSVGElement](input._internal_.SVGSVGElement.md#ownersvgelement)
- [parentElement](input._internal_.SVGSVGElement.md#parentelement)
- [parentNode](input._internal_.SVGSVGElement.md#parentnode)
- [part](input._internal_.SVGSVGElement.md#part)
- [prefix](input._internal_.SVGSVGElement.md#prefix)
- [preserveAspectRatio](input._internal_.SVGSVGElement.md#preserveaspectratio)
- [previousElementSibling](input._internal_.SVGSVGElement.md#previouselementsibling)
- [previousSibling](input._internal_.SVGSVGElement.md#previoussibling)
- [requiredExtensions](input._internal_.SVGSVGElement.md#requiredextensions)
- [scrollHeight](input._internal_.SVGSVGElement.md#scrollheight)
- [scrollLeft](input._internal_.SVGSVGElement.md#scrollleft)
- [scrollTop](input._internal_.SVGSVGElement.md#scrolltop)
- [scrollWidth](input._internal_.SVGSVGElement.md#scrollwidth)
- [shadowRoot](input._internal_.SVGSVGElement.md#shadowroot)
- [slot](input._internal_.SVGSVGElement.md#slot)
- [style](input._internal_.SVGSVGElement.md#style)
- [systemLanguage](input._internal_.SVGSVGElement.md#systemlanguage)
- [tabIndex](input._internal_.SVGSVGElement.md#tabindex)
- [tagName](input._internal_.SVGSVGElement.md#tagname)
- [textContent](input._internal_.SVGSVGElement.md#textcontent)
- [transform](input._internal_.SVGSVGElement.md#transform)
- [viewBox](input._internal_.SVGSVGElement.md#viewbox)
- [viewportElement](input._internal_.SVGSVGElement.md#viewportelement)
- [width](input._internal_.SVGSVGElement.md#width)
- [x](input._internal_.SVGSVGElement.md#x)
- [y](input._internal_.SVGSVGElement.md#y)

### Methods

- [addEventListener](input._internal_.SVGSVGElement.md#addeventlistener)
- [after](input._internal_.SVGSVGElement.md#after)
- [animate](input._internal_.SVGSVGElement.md#animate)
- [animationsPaused](input._internal_.SVGSVGElement.md#animationspaused)
- [append](input._internal_.SVGSVGElement.md#append)
- [appendChild](input._internal_.SVGSVGElement.md#appendchild)
- [attachShadow](input._internal_.SVGSVGElement.md#attachshadow)
- [before](input._internal_.SVGSVGElement.md#before)
- [blur](input._internal_.SVGSVGElement.md#blur)
- [checkEnclosure](input._internal_.SVGSVGElement.md#checkenclosure)
- [checkIntersection](input._internal_.SVGSVGElement.md#checkintersection)
- [cloneNode](input._internal_.SVGSVGElement.md#clonenode)
- [closest](input._internal_.SVGSVGElement.md#closest)
- [compareDocumentPosition](input._internal_.SVGSVGElement.md#comparedocumentposition)
- [contains](input._internal_.SVGSVGElement.md#contains)
- [createSVGAngle](input._internal_.SVGSVGElement.md#createsvgangle)
- [createSVGLength](input._internal_.SVGSVGElement.md#createsvglength)
- [createSVGMatrix](input._internal_.SVGSVGElement.md#createsvgmatrix)
- [createSVGNumber](input._internal_.SVGSVGElement.md#createsvgnumber)
- [createSVGPoint](input._internal_.SVGSVGElement.md#createsvgpoint)
- [createSVGRect](input._internal_.SVGSVGElement.md#createsvgrect)
- [createSVGTransform](input._internal_.SVGSVGElement.md#createsvgtransform)
- [createSVGTransformFromMatrix](input._internal_.SVGSVGElement.md#createsvgtransformfrommatrix)
- [deselectAll](input._internal_.SVGSVGElement.md#deselectall)
- [dispatchEvent](input._internal_.SVGSVGElement.md#dispatchevent)
- [focus](input._internal_.SVGSVGElement.md#focus)
- [forceRedraw](input._internal_.SVGSVGElement.md#forceredraw)
- [getAnimations](input._internal_.SVGSVGElement.md#getanimations)
- [getAttribute](input._internal_.SVGSVGElement.md#getattribute)
- [getAttributeNS](input._internal_.SVGSVGElement.md#getattributens)
- [getAttributeNames](input._internal_.SVGSVGElement.md#getattributenames)
- [getAttributeNode](input._internal_.SVGSVGElement.md#getattributenode)
- [getAttributeNodeNS](input._internal_.SVGSVGElement.md#getattributenodens)
- [getBBox](input._internal_.SVGSVGElement.md#getbbox)
- [getBoundingClientRect](input._internal_.SVGSVGElement.md#getboundingclientrect)
- [getCTM](input._internal_.SVGSVGElement.md#getctm)
- [getClientRects](input._internal_.SVGSVGElement.md#getclientrects)
- [getCurrentTime](input._internal_.SVGSVGElement.md#getcurrenttime)
- [getElementById](input._internal_.SVGSVGElement.md#getelementbyid)
- [getElementsByClassName](input._internal_.SVGSVGElement.md#getelementsbyclassname)
- [getElementsByTagName](input._internal_.SVGSVGElement.md#getelementsbytagname)
- [getElementsByTagNameNS](input._internal_.SVGSVGElement.md#getelementsbytagnamens)
- [getEnclosureList](input._internal_.SVGSVGElement.md#getenclosurelist)
- [getIntersectionList](input._internal_.SVGSVGElement.md#getintersectionlist)
- [getRootNode](input._internal_.SVGSVGElement.md#getrootnode)
- [getScreenCTM](input._internal_.SVGSVGElement.md#getscreenctm)
- [hasAttribute](input._internal_.SVGSVGElement.md#hasattribute)
- [hasAttributeNS](input._internal_.SVGSVGElement.md#hasattributens)
- [hasAttributes](input._internal_.SVGSVGElement.md#hasattributes)
- [hasChildNodes](input._internal_.SVGSVGElement.md#haschildnodes)
- [hasPointerCapture](input._internal_.SVGSVGElement.md#haspointercapture)
- [insertAdjacentElement](input._internal_.SVGSVGElement.md#insertadjacentelement)
- [insertAdjacentHTML](input._internal_.SVGSVGElement.md#insertadjacenthtml)
- [insertAdjacentText](input._internal_.SVGSVGElement.md#insertadjacenttext)
- [insertBefore](input._internal_.SVGSVGElement.md#insertbefore)
- [isDefaultNamespace](input._internal_.SVGSVGElement.md#isdefaultnamespace)
- [isEqualNode](input._internal_.SVGSVGElement.md#isequalnode)
- [isSameNode](input._internal_.SVGSVGElement.md#issamenode)
- [lookupNamespaceURI](input._internal_.SVGSVGElement.md#lookupnamespaceuri)
- [lookupPrefix](input._internal_.SVGSVGElement.md#lookupprefix)
- [matches](input._internal_.SVGSVGElement.md#matches)
- [normalize](input._internal_.SVGSVGElement.md#normalize)
- [pauseAnimations](input._internal_.SVGSVGElement.md#pauseanimations)
- [prepend](input._internal_.SVGSVGElement.md#prepend)
- [querySelector](input._internal_.SVGSVGElement.md#queryselector)
- [querySelectorAll](input._internal_.SVGSVGElement.md#queryselectorall)
- [releasePointerCapture](input._internal_.SVGSVGElement.md#releasepointercapture)
- [remove](input._internal_.SVGSVGElement.md#remove)
- [removeAttribute](input._internal_.SVGSVGElement.md#removeattribute)
- [removeAttributeNS](input._internal_.SVGSVGElement.md#removeattributens)
- [removeAttributeNode](input._internal_.SVGSVGElement.md#removeattributenode)
- [removeChild](input._internal_.SVGSVGElement.md#removechild)
- [removeEventListener](input._internal_.SVGSVGElement.md#removeeventlistener)
- [replaceChild](input._internal_.SVGSVGElement.md#replacechild)
- [replaceChildren](input._internal_.SVGSVGElement.md#replacechildren)
- [replaceWith](input._internal_.SVGSVGElement.md#replacewith)
- [requestFullscreen](input._internal_.SVGSVGElement.md#requestfullscreen)
- [requestPointerLock](input._internal_.SVGSVGElement.md#requestpointerlock)
- [scroll](input._internal_.SVGSVGElement.md#scroll)
- [scrollBy](input._internal_.SVGSVGElement.md#scrollby)
- [scrollIntoView](input._internal_.SVGSVGElement.md#scrollintoview)
- [scrollTo](input._internal_.SVGSVGElement.md#scrollto)
- [setAttribute](input._internal_.SVGSVGElement.md#setattribute)
- [setAttributeNS](input._internal_.SVGSVGElement.md#setattributens)
- [setAttributeNode](input._internal_.SVGSVGElement.md#setattributenode)
- [setAttributeNodeNS](input._internal_.SVGSVGElement.md#setattributenodens)
- [setCurrentTime](input._internal_.SVGSVGElement.md#setcurrenttime)
- [setPointerCapture](input._internal_.SVGSVGElement.md#setpointercapture)
- [suspendRedraw](input._internal_.SVGSVGElement.md#suspendredraw)
- [toggleAttribute](input._internal_.SVGSVGElement.md#toggleattribute)
- [unpauseAnimations](input._internal_.SVGSVGElement.md#unpauseanimations)
- [unsuspendRedraw](input._internal_.SVGSVGElement.md#unsuspendredraw)
- [unsuspendRedrawAll](input._internal_.SVGSVGElement.md#unsuspendredrawall)
- [webkitMatchesSelector](input._internal_.SVGSVGElement.md#webkitmatchesselector)

## Properties

### ATTRIBUTE\_NODE

• `Readonly` **ATTRIBUTE\_NODE**: `number`

#### Inherited from

SVGGraphicsElement.ATTRIBUTE\_NODE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10089

___

### CDATA\_SECTION\_NODE

• `Readonly` **CDATA\_SECTION\_NODE**: `number`

node is a CDATASection node.

#### Inherited from

SVGGraphicsElement.CDATA\_SECTION\_NODE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10091

___

### COMMENT\_NODE

• `Readonly` **COMMENT\_NODE**: `number`

node is a Comment node.

#### Inherited from

SVGGraphicsElement.COMMENT\_NODE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10093

___

### DOCUMENT\_FRAGMENT\_NODE

• `Readonly` **DOCUMENT\_FRAGMENT\_NODE**: `number`

node is a DocumentFragment node.

#### Inherited from

SVGGraphicsElement.DOCUMENT\_FRAGMENT\_NODE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10095

___

### DOCUMENT\_NODE

• `Readonly` **DOCUMENT\_NODE**: `number`

node is a document.

#### Inherited from

SVGGraphicsElement.DOCUMENT\_NODE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10097

___

### DOCUMENT\_POSITION\_CONTAINED\_BY

• `Readonly` **DOCUMENT\_POSITION\_CONTAINED\_BY**: `number`

Set when other is a descendant of node.

#### Inherited from

SVGGraphicsElement.DOCUMENT\_POSITION\_CONTAINED\_BY

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10099

___

### DOCUMENT\_POSITION\_CONTAINS

• `Readonly` **DOCUMENT\_POSITION\_CONTAINS**: `number`

Set when other is an ancestor of node.

#### Inherited from

SVGGraphicsElement.DOCUMENT\_POSITION\_CONTAINS

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10101

___

### DOCUMENT\_POSITION\_DISCONNECTED

• `Readonly` **DOCUMENT\_POSITION\_DISCONNECTED**: `number`

Set when node and other are not in the same tree.

#### Inherited from

SVGGraphicsElement.DOCUMENT\_POSITION\_DISCONNECTED

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10103

___

### DOCUMENT\_POSITION\_FOLLOWING

• `Readonly` **DOCUMENT\_POSITION\_FOLLOWING**: `number`

Set when other is following node.

#### Inherited from

SVGGraphicsElement.DOCUMENT\_POSITION\_FOLLOWING

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10105

___

### DOCUMENT\_POSITION\_IMPLEMENTATION\_SPECIFIC

• `Readonly` **DOCUMENT\_POSITION\_IMPLEMENTATION\_SPECIFIC**: `number`

#### Inherited from

SVGGraphicsElement.DOCUMENT\_POSITION\_IMPLEMENTATION\_SPECIFIC

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10106

___

### DOCUMENT\_POSITION\_PRECEDING

• `Readonly` **DOCUMENT\_POSITION\_PRECEDING**: `number`

Set when other is preceding node.

#### Inherited from

SVGGraphicsElement.DOCUMENT\_POSITION\_PRECEDING

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10108

___

### DOCUMENT\_TYPE\_NODE

• `Readonly` **DOCUMENT\_TYPE\_NODE**: `number`

node is a doctype.

#### Inherited from

SVGGraphicsElement.DOCUMENT\_TYPE\_NODE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10110

___

### ELEMENT\_NODE

• `Readonly` **ELEMENT\_NODE**: `number`

node is an element.

#### Inherited from

SVGGraphicsElement.ELEMENT\_NODE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10112

___

### ENTITY\_NODE

• `Readonly` **ENTITY\_NODE**: `number`

#### Inherited from

SVGGraphicsElement.ENTITY\_NODE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10113

___

### ENTITY\_REFERENCE\_NODE

• `Readonly` **ENTITY\_REFERENCE\_NODE**: `number`

#### Inherited from

SVGGraphicsElement.ENTITY\_REFERENCE\_NODE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10114

___

### NOTATION\_NODE

• `Readonly` **NOTATION\_NODE**: `number`

#### Inherited from

SVGGraphicsElement.NOTATION\_NODE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10115

___

### PROCESSING\_INSTRUCTION\_NODE

• `Readonly` **PROCESSING\_INSTRUCTION\_NODE**: `number`

node is a ProcessingInstruction node.

#### Inherited from

SVGGraphicsElement.PROCESSING\_INSTRUCTION\_NODE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10117

___

### TEXT\_NODE

• `Readonly` **TEXT\_NODE**: `number`

node is a Text node.

#### Inherited from

SVGGraphicsElement.TEXT\_NODE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10119

___

### ariaAtomic

• **ariaAtomic**: ``null`` \| `string`

#### Inherited from

SVGGraphicsElement.ariaAtomic

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1924

___

### ariaAutoComplete

• **ariaAutoComplete**: ``null`` \| `string`

#### Inherited from

SVGGraphicsElement.ariaAutoComplete

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1925

___

### ariaBusy

• **ariaBusy**: ``null`` \| `string`

#### Inherited from

SVGGraphicsElement.ariaBusy

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1926

___

### ariaChecked

• **ariaChecked**: ``null`` \| `string`

#### Inherited from

SVGGraphicsElement.ariaChecked

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1927

___

### ariaColCount

• **ariaColCount**: ``null`` \| `string`

#### Inherited from

SVGGraphicsElement.ariaColCount

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1928

___

### ariaColIndex

• **ariaColIndex**: ``null`` \| `string`

#### Inherited from

SVGGraphicsElement.ariaColIndex

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1929

___

### ariaColSpan

• **ariaColSpan**: ``null`` \| `string`

#### Inherited from

SVGGraphicsElement.ariaColSpan

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1930

___

### ariaCurrent

• **ariaCurrent**: ``null`` \| `string`

#### Inherited from

SVGGraphicsElement.ariaCurrent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1931

___

### ariaDisabled

• **ariaDisabled**: ``null`` \| `string`

#### Inherited from

SVGGraphicsElement.ariaDisabled

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1932

___

### ariaExpanded

• **ariaExpanded**: ``null`` \| `string`

#### Inherited from

SVGGraphicsElement.ariaExpanded

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1933

___

### ariaHasPopup

• **ariaHasPopup**: ``null`` \| `string`

#### Inherited from

SVGGraphicsElement.ariaHasPopup

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1934

___

### ariaHidden

• **ariaHidden**: ``null`` \| `string`

#### Inherited from

SVGGraphicsElement.ariaHidden

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1935

___

### ariaKeyShortcuts

• **ariaKeyShortcuts**: ``null`` \| `string`

#### Inherited from

SVGGraphicsElement.ariaKeyShortcuts

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1936

___

### ariaLabel

• **ariaLabel**: ``null`` \| `string`

#### Inherited from

SVGGraphicsElement.ariaLabel

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1937

___

### ariaLevel

• **ariaLevel**: ``null`` \| `string`

#### Inherited from

SVGGraphicsElement.ariaLevel

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1938

___

### ariaLive

• **ariaLive**: ``null`` \| `string`

#### Inherited from

SVGGraphicsElement.ariaLive

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1939

___

### ariaModal

• **ariaModal**: ``null`` \| `string`

#### Inherited from

SVGGraphicsElement.ariaModal

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1940

___

### ariaMultiLine

• **ariaMultiLine**: ``null`` \| `string`

#### Inherited from

SVGGraphicsElement.ariaMultiLine

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1941

___

### ariaMultiSelectable

• **ariaMultiSelectable**: ``null`` \| `string`

#### Inherited from

SVGGraphicsElement.ariaMultiSelectable

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1942

___

### ariaOrientation

• **ariaOrientation**: ``null`` \| `string`

#### Inherited from

SVGGraphicsElement.ariaOrientation

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1943

___

### ariaPlaceholder

• **ariaPlaceholder**: ``null`` \| `string`

#### Inherited from

SVGGraphicsElement.ariaPlaceholder

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1944

___

### ariaPosInSet

• **ariaPosInSet**: ``null`` \| `string`

#### Inherited from

SVGGraphicsElement.ariaPosInSet

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1945

___

### ariaPressed

• **ariaPressed**: ``null`` \| `string`

#### Inherited from

SVGGraphicsElement.ariaPressed

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1946

___

### ariaReadOnly

• **ariaReadOnly**: ``null`` \| `string`

#### Inherited from

SVGGraphicsElement.ariaReadOnly

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1947

___

### ariaRequired

• **ariaRequired**: ``null`` \| `string`

#### Inherited from

SVGGraphicsElement.ariaRequired

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1948

___

### ariaRoleDescription

• **ariaRoleDescription**: ``null`` \| `string`

#### Inherited from

SVGGraphicsElement.ariaRoleDescription

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1949

___

### ariaRowCount

• **ariaRowCount**: ``null`` \| `string`

#### Inherited from

SVGGraphicsElement.ariaRowCount

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1950

___

### ariaRowIndex

• **ariaRowIndex**: ``null`` \| `string`

#### Inherited from

SVGGraphicsElement.ariaRowIndex

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1951

___

### ariaRowSpan

• **ariaRowSpan**: ``null`` \| `string`

#### Inherited from

SVGGraphicsElement.ariaRowSpan

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1952

___

### ariaSelected

• **ariaSelected**: ``null`` \| `string`

#### Inherited from

SVGGraphicsElement.ariaSelected

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1953

___

### ariaSetSize

• **ariaSetSize**: ``null`` \| `string`

#### Inherited from

SVGGraphicsElement.ariaSetSize

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1954

___

### ariaSort

• **ariaSort**: ``null`` \| `string`

#### Inherited from

SVGGraphicsElement.ariaSort

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1955

___

### ariaValueMax

• **ariaValueMax**: ``null`` \| `string`

#### Inherited from

SVGGraphicsElement.ariaValueMax

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1956

___

### ariaValueMin

• **ariaValueMin**: ``null`` \| `string`

#### Inherited from

SVGGraphicsElement.ariaValueMin

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1957

___

### ariaValueNow

• **ariaValueNow**: ``null`` \| `string`

#### Inherited from

SVGGraphicsElement.ariaValueNow

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1958

___

### ariaValueText

• **ariaValueText**: ``null`` \| `string`

#### Inherited from

SVGGraphicsElement.ariaValueText

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1959

___

### assignedSlot

• `Readonly` **assignedSlot**: ``null`` \| [`HTMLSlotElement`](../modules/input._internal_.md#htmlslotelement)

#### Inherited from

SVGGraphicsElement.assignedSlot

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13595

___

### attributes

• `Readonly` **attributes**: [`NamedNodeMap`](../modules/input._internal_.md#namednodemap)

#### Inherited from

SVGGraphicsElement.attributes

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4852

___

### autofocus

• **autofocus**: `boolean`

#### Inherited from

SVGGraphicsElement.autofocus

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7547

___

### baseURI

• `Readonly` **baseURI**: `string`

Returns node's node document's document base URL.

#### Inherited from

SVGGraphicsElement.baseURI

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10042

___

### childElementCount

• `Readonly` **childElementCount**: `number`

#### Inherited from

SVGGraphicsElement.childElementCount

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10407

___

### childNodes

• `Readonly` **childNodes**: [`NodeListOf`](input._internal_.NodeListOf.md)<[`ChildNode`](input._internal_.ChildNode.md)\>

Returns the children.

#### Inherited from

SVGGraphicsElement.childNodes

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10044

___

### children

• `Readonly` **children**: [`HTMLCollection`](../modules/input._internal_.md#htmlcollection)

Returns the child elements.

#### Inherited from

SVGGraphicsElement.children

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10409

___

### classList

• `Readonly` **classList**: [`DOMTokenList`](../modules/input._internal_.md#domtokenlist)

Allows for manipulation of element's class content attribute as a set of whitespace-separated tokens through a DOMTokenList object.

#### Inherited from

SVGGraphicsElement.classList

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4854

___

### className

• `Readonly` **className**: `any`

**`deprecated`**

#### Inherited from

SVGGraphicsElement.className

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11963

___

### clientHeight

• `Readonly` **clientHeight**: `number`

#### Inherited from

SVGGraphicsElement.clientHeight

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4857

___

### clientLeft

• `Readonly` **clientLeft**: `number`

#### Inherited from

SVGGraphicsElement.clientLeft

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4858

___

### clientTop

• `Readonly` **clientTop**: `number`

#### Inherited from

SVGGraphicsElement.clientTop

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4859

___

### clientWidth

• `Readonly` **clientWidth**: `number`

#### Inherited from

SVGGraphicsElement.clientWidth

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4860

___

### currentScale

• **currentScale**: `number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:12986

___

### currentTranslate

• `Readonly` **currentTranslate**: [`DOMPointReadOnly`](../modules/input._internal_.md#dompointreadonly)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:12987

___

### dataset

• `Readonly` **dataset**: [`DOMStringMap`](../modules/input._internal_.md#domstringmap)

#### Inherited from

SVGGraphicsElement.dataset

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7548

___

### firstChild

• `Readonly` **firstChild**: ``null`` \| [`ChildNode`](input._internal_.ChildNode.md)

Returns the first child.

#### Inherited from

SVGGraphicsElement.firstChild

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10046

___

### firstElementChild

• `Readonly` **firstElementChild**: ``null`` \| [`Element`](../modules/input._internal_.md#element)

Returns the first child that is an element, and null otherwise.

#### Inherited from

SVGGraphicsElement.firstElementChild

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10411

___

### height

• `Readonly` **height**: [`SVGAnimatedLength`](../modules/input._internal_.md#svganimatedlength)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:12988

___

### id

• **id**: `string`

Returns the value of element's id content attribute. Can be set to change it.

#### Inherited from

SVGGraphicsElement.id

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4862

___

### innerHTML

• **innerHTML**: `string`

#### Inherited from

SVGGraphicsElement.innerHTML

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8903

___

### isConnected

• `Readonly` **isConnected**: `boolean`

Returns true if node is connected and false otherwise.

#### Inherited from

SVGGraphicsElement.isConnected

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10048

___

### lastChild

• `Readonly` **lastChild**: ``null`` \| [`ChildNode`](input._internal_.ChildNode.md)

Returns the last child.

#### Inherited from

SVGGraphicsElement.lastChild

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10050

___

### lastElementChild

• `Readonly` **lastElementChild**: ``null`` \| [`Element`](../modules/input._internal_.md#element)

Returns the last child that is an element, and null otherwise.

#### Inherited from

SVGGraphicsElement.lastElementChild

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10413

___

### localName

• `Readonly` **localName**: `string`

Returns the local name.

#### Inherited from

SVGGraphicsElement.localName

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4864

___

### namespaceURI

• `Readonly` **namespaceURI**: ``null`` \| `string`

Returns the namespace.

#### Inherited from

SVGGraphicsElement.namespaceURI

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4866

___

### nextElementSibling

• `Readonly` **nextElementSibling**: ``null`` \| [`Element`](../modules/input._internal_.md#element)

Returns the first following sibling that is an element, and null otherwise.

#### Inherited from

SVGGraphicsElement.nextElementSibling

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10209

___

### nextSibling

• `Readonly` **nextSibling**: ``null`` \| [`ChildNode`](input._internal_.ChildNode.md)

Returns the next sibling.

#### Inherited from

SVGGraphicsElement.nextSibling

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10052

___

### nodeName

• `Readonly` **nodeName**: `string`

Returns a string appropriate for the type of node.

#### Inherited from

SVGGraphicsElement.nodeName

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10054

___

### nodeType

• `Readonly` **nodeType**: `number`

Returns the type of node.

#### Inherited from

SVGGraphicsElement.nodeType

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10056

___

### nodeValue

• **nodeValue**: ``null`` \| `string`

#### Inherited from

SVGGraphicsElement.nodeValue

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10057

___

### nonce

• `Optional` **nonce**: `string`

#### Inherited from

SVGGraphicsElement.nonce

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7549

___

### onabort

• **onabort**: ``null`` \| (`this`: [`GlobalEventHandlers`](input._internal_.GlobalEventHandlers.md), `ev`: [`UIEvent`](../modules/input._internal_.md#uievent)) => `any`

Fires when the user aborts the download.

**`param`** The event.

#### Inherited from

SVGGraphicsElement.onabort

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5647

___

### onafterprint

• **onafterprint**: ``null`` \| (`this`: [`WindowEventHandlers`](input._internal_.WindowEventHandlers.md), `ev`: [`Event`](../modules/input._internal_.md#event)) => `any`

#### Inherited from

[WindowEventHandlers](input._internal_.WindowEventHandlers.md).[onafterprint](input._internal_.WindowEventHandlers.md#onafterprint)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16766

___

### onanimationcancel

• **onanimationcancel**: ``null`` \| (`this`: [`GlobalEventHandlers`](input._internal_.GlobalEventHandlers.md), `ev`: [`AnimationEvent`](../modules/input._internal_.md#animationevent)) => `any`

#### Inherited from

SVGGraphicsElement.onanimationcancel

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5648

___

### onanimationend

• **onanimationend**: ``null`` \| (`this`: [`GlobalEventHandlers`](input._internal_.GlobalEventHandlers.md), `ev`: [`AnimationEvent`](../modules/input._internal_.md#animationevent)) => `any`

#### Inherited from

SVGGraphicsElement.onanimationend

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5649

___

### onanimationiteration

• **onanimationiteration**: ``null`` \| (`this`: [`GlobalEventHandlers`](input._internal_.GlobalEventHandlers.md), `ev`: [`AnimationEvent`](../modules/input._internal_.md#animationevent)) => `any`

#### Inherited from

SVGGraphicsElement.onanimationiteration

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5650

___

### onanimationstart

• **onanimationstart**: ``null`` \| (`this`: [`GlobalEventHandlers`](input._internal_.GlobalEventHandlers.md), `ev`: [`AnimationEvent`](../modules/input._internal_.md#animationevent)) => `any`

#### Inherited from

SVGGraphicsElement.onanimationstart

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5651

___

### onauxclick

• **onauxclick**: ``null`` \| (`this`: [`GlobalEventHandlers`](input._internal_.GlobalEventHandlers.md), `ev`: [`MouseEvent`](../modules/input._internal_.md#mouseevent)) => `any`

#### Inherited from

SVGGraphicsElement.onauxclick

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5652

___

### onbeforeprint

• **onbeforeprint**: ``null`` \| (`this`: [`WindowEventHandlers`](input._internal_.WindowEventHandlers.md), `ev`: [`Event`](../modules/input._internal_.md#event)) => `any`

#### Inherited from

[WindowEventHandlers](input._internal_.WindowEventHandlers.md).[onbeforeprint](input._internal_.WindowEventHandlers.md#onbeforeprint)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16767

___

### onbeforeunload

• **onbeforeunload**: ``null`` \| (`this`: [`WindowEventHandlers`](input._internal_.WindowEventHandlers.md), `ev`: [`BeforeUnloadEvent`](../modules/input._internal_.md#beforeunloadevent)) => `any`

#### Inherited from

[WindowEventHandlers](input._internal_.WindowEventHandlers.md).[onbeforeunload](input._internal_.WindowEventHandlers.md#onbeforeunload)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16768

___

### onblur

• **onblur**: ``null`` \| (`this`: [`GlobalEventHandlers`](input._internal_.GlobalEventHandlers.md), `ev`: [`FocusEvent`](../modules/input._internal_.md#focusevent)) => `any`

Fires when the object loses the input focus.

**`param`** The focus event.

#### Inherited from

SVGGraphicsElement.onblur

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5657

___

### oncanplay

• **oncanplay**: ``null`` \| (`this`: [`GlobalEventHandlers`](input._internal_.GlobalEventHandlers.md), `ev`: [`Event`](../modules/input._internal_.md#event)) => `any`

Occurs when playback is possible, but would require further buffering.

**`param`** The event.

#### Inherited from

SVGGraphicsElement.oncanplay

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5662

___

### oncanplaythrough

• **oncanplaythrough**: ``null`` \| (`this`: [`GlobalEventHandlers`](input._internal_.GlobalEventHandlers.md), `ev`: [`Event`](../modules/input._internal_.md#event)) => `any`

#### Inherited from

SVGGraphicsElement.oncanplaythrough

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5663

___

### onchange

• **onchange**: ``null`` \| (`this`: [`GlobalEventHandlers`](input._internal_.GlobalEventHandlers.md), `ev`: [`Event`](../modules/input._internal_.md#event)) => `any`

Fires when the contents of the object or selection have changed.

**`param`** The event.

#### Inherited from

SVGGraphicsElement.onchange

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5668

___

### onclick

• **onclick**: ``null`` \| (`this`: [`GlobalEventHandlers`](input._internal_.GlobalEventHandlers.md), `ev`: [`MouseEvent`](../modules/input._internal_.md#mouseevent)) => `any`

Fires when the user clicks the left mouse button on the object

**`param`** The mouse event.

#### Inherited from

SVGGraphicsElement.onclick

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5673

___

### onclose

• **onclose**: ``null`` \| (`this`: [`GlobalEventHandlers`](input._internal_.GlobalEventHandlers.md), `ev`: [`Event`](../modules/input._internal_.md#event)) => `any`

#### Inherited from

SVGGraphicsElement.onclose

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5674

___

### oncontextmenu

• **oncontextmenu**: ``null`` \| (`this`: [`GlobalEventHandlers`](input._internal_.GlobalEventHandlers.md), `ev`: [`MouseEvent`](../modules/input._internal_.md#mouseevent)) => `any`

Fires when the user clicks the right mouse button in the client area, opening the context menu.

**`param`** The mouse event.

#### Inherited from

SVGGraphicsElement.oncontextmenu

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5679

___

### oncopy

• **oncopy**: ``null`` \| (`this`: [`DocumentAndElementEventHandlers`](input._internal_.DocumentAndElementEventHandlers.md), `ev`: [`ClipboardEvent`](../modules/input._internal_.md#clipboardevent)) => `any`

#### Inherited from

SVGGraphicsElement.oncopy

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4708

___

### oncuechange

• **oncuechange**: ``null`` \| (`this`: [`GlobalEventHandlers`](input._internal_.GlobalEventHandlers.md), `ev`: [`Event`](../modules/input._internal_.md#event)) => `any`

#### Inherited from

SVGGraphicsElement.oncuechange

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5680

___

### oncut

• **oncut**: ``null`` \| (`this`: [`DocumentAndElementEventHandlers`](input._internal_.DocumentAndElementEventHandlers.md), `ev`: [`ClipboardEvent`](../modules/input._internal_.md#clipboardevent)) => `any`

#### Inherited from

SVGGraphicsElement.oncut

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4709

___

### ondblclick

• **ondblclick**: ``null`` \| (`this`: [`GlobalEventHandlers`](input._internal_.GlobalEventHandlers.md), `ev`: [`MouseEvent`](../modules/input._internal_.md#mouseevent)) => `any`

Fires when the user double-clicks the object.

**`param`** The mouse event.

#### Inherited from

SVGGraphicsElement.ondblclick

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5685

___

### ondrag

• **ondrag**: ``null`` \| (`this`: [`GlobalEventHandlers`](input._internal_.GlobalEventHandlers.md), `ev`: [`DragEvent`](../modules/input._internal_.md#dragevent)) => `any`

Fires on the source object continuously during a drag operation.

**`param`** The event.

#### Inherited from

SVGGraphicsElement.ondrag

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5690

___

### ondragend

• **ondragend**: ``null`` \| (`this`: [`GlobalEventHandlers`](input._internal_.GlobalEventHandlers.md), `ev`: [`DragEvent`](../modules/input._internal_.md#dragevent)) => `any`

Fires on the source object when the user releases the mouse at the close of a drag operation.

**`param`** The event.

#### Inherited from

SVGGraphicsElement.ondragend

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5695

___

### ondragenter

• **ondragenter**: ``null`` \| (`this`: [`GlobalEventHandlers`](input._internal_.GlobalEventHandlers.md), `ev`: [`DragEvent`](../modules/input._internal_.md#dragevent)) => `any`

Fires on the target element when the user drags the object to a valid drop target.

**`param`** The drag event.

#### Inherited from

SVGGraphicsElement.ondragenter

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5700

___

### ondragleave

• **ondragleave**: ``null`` \| (`this`: [`GlobalEventHandlers`](input._internal_.GlobalEventHandlers.md), `ev`: [`DragEvent`](../modules/input._internal_.md#dragevent)) => `any`

Fires on the target object when the user moves the mouse out of a valid drop target during a drag operation.

**`param`** The drag event.

#### Inherited from

SVGGraphicsElement.ondragleave

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5705

___

### ondragover

• **ondragover**: ``null`` \| (`this`: [`GlobalEventHandlers`](input._internal_.GlobalEventHandlers.md), `ev`: [`DragEvent`](../modules/input._internal_.md#dragevent)) => `any`

Fires on the target element continuously while the user drags the object over a valid drop target.

**`param`** The event.

#### Inherited from

SVGGraphicsElement.ondragover

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5710

___

### ondragstart

• **ondragstart**: ``null`` \| (`this`: [`GlobalEventHandlers`](input._internal_.GlobalEventHandlers.md), `ev`: [`DragEvent`](../modules/input._internal_.md#dragevent)) => `any`

Fires on the source object when the user starts to drag a text selection or selected object.

**`param`** The event.

#### Inherited from

SVGGraphicsElement.ondragstart

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5715

___

### ondrop

• **ondrop**: ``null`` \| (`this`: [`GlobalEventHandlers`](input._internal_.GlobalEventHandlers.md), `ev`: [`DragEvent`](../modules/input._internal_.md#dragevent)) => `any`

#### Inherited from

SVGGraphicsElement.ondrop

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5716

___

### ondurationchange

• **ondurationchange**: ``null`` \| (`this`: [`GlobalEventHandlers`](input._internal_.GlobalEventHandlers.md), `ev`: [`Event`](../modules/input._internal_.md#event)) => `any`

Occurs when the duration attribute is updated.

**`param`** The event.

#### Inherited from

SVGGraphicsElement.ondurationchange

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5721

___

### onemptied

• **onemptied**: ``null`` \| (`this`: [`GlobalEventHandlers`](input._internal_.GlobalEventHandlers.md), `ev`: [`Event`](../modules/input._internal_.md#event)) => `any`

Occurs when the media element is reset to its initial state.

**`param`** The event.

#### Inherited from

SVGGraphicsElement.onemptied

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5726

___

### onended

• **onended**: ``null`` \| (`this`: [`GlobalEventHandlers`](input._internal_.GlobalEventHandlers.md), `ev`: [`Event`](../modules/input._internal_.md#event)) => `any`

Occurs when the end of playback is reached.

**`param`** The event

#### Inherited from

SVGGraphicsElement.onended

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5731

___

### onerror

• **onerror**: [`OnErrorEventHandler`](../modules/input._internal_.md#onerroreventhandler)

Fires when an error occurs during object loading.

**`param`** The event.

#### Inherited from

SVGGraphicsElement.onerror

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5736

___

### onfocus

• **onfocus**: ``null`` \| (`this`: [`GlobalEventHandlers`](input._internal_.GlobalEventHandlers.md), `ev`: [`FocusEvent`](../modules/input._internal_.md#focusevent)) => `any`

Fires when the object receives focus.

**`param`** The event.

#### Inherited from

SVGGraphicsElement.onfocus

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5741

___

### onformdata

• **onformdata**: ``null`` \| (`this`: [`GlobalEventHandlers`](input._internal_.GlobalEventHandlers.md), `ev`: [`FormDataEvent`](../modules/input._internal_.md#formdataevent)) => `any`

#### Inherited from

SVGGraphicsElement.onformdata

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5742

___

### onfullscreenchange

• **onfullscreenchange**: ``null`` \| (`this`: [`Element`](../modules/input._internal_.md#element), `ev`: [`Event`](../modules/input._internal_.md#event)) => `any`

#### Inherited from

SVGGraphicsElement.onfullscreenchange

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4867

___

### onfullscreenerror

• **onfullscreenerror**: ``null`` \| (`this`: [`Element`](../modules/input._internal_.md#element), `ev`: [`Event`](../modules/input._internal_.md#event)) => `any`

#### Inherited from

SVGGraphicsElement.onfullscreenerror

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4868

___

### ongamepadconnected

• **ongamepadconnected**: ``null`` \| (`this`: [`WindowEventHandlers`](input._internal_.WindowEventHandlers.md), `ev`: [`GamepadEvent`](../modules/input._internal_.md#gamepadevent)) => `any`

#### Inherited from

[WindowEventHandlers](input._internal_.WindowEventHandlers.md).[ongamepadconnected](input._internal_.WindowEventHandlers.md#ongamepadconnected)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16769

___

### ongamepaddisconnected

• **ongamepaddisconnected**: ``null`` \| (`this`: [`WindowEventHandlers`](input._internal_.WindowEventHandlers.md), `ev`: [`GamepadEvent`](../modules/input._internal_.md#gamepadevent)) => `any`

#### Inherited from

[WindowEventHandlers](input._internal_.WindowEventHandlers.md).[ongamepaddisconnected](input._internal_.WindowEventHandlers.md#ongamepaddisconnected)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16770

___

### ongotpointercapture

• **ongotpointercapture**: ``null`` \| (`this`: [`GlobalEventHandlers`](input._internal_.GlobalEventHandlers.md), `ev`: [`PointerEvent`](../modules/input._internal_.md#pointerevent)) => `any`

#### Inherited from

SVGGraphicsElement.ongotpointercapture

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5743

___

### onhashchange

• **onhashchange**: ``null`` \| (`this`: [`WindowEventHandlers`](input._internal_.WindowEventHandlers.md), `ev`: [`HashChangeEvent`](../modules/input._internal_.md#hashchangeevent)) => `any`

#### Inherited from

[WindowEventHandlers](input._internal_.WindowEventHandlers.md).[onhashchange](input._internal_.WindowEventHandlers.md#onhashchange)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16771

___

### oninput

• **oninput**: ``null`` \| (`this`: [`GlobalEventHandlers`](input._internal_.GlobalEventHandlers.md), `ev`: [`Event`](../modules/input._internal_.md#event)) => `any`

#### Inherited from

SVGGraphicsElement.oninput

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5744

___

### oninvalid

• **oninvalid**: ``null`` \| (`this`: [`GlobalEventHandlers`](input._internal_.GlobalEventHandlers.md), `ev`: [`Event`](../modules/input._internal_.md#event)) => `any`

#### Inherited from

SVGGraphicsElement.oninvalid

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5745

___

### onkeydown

• **onkeydown**: ``null`` \| (`this`: [`GlobalEventHandlers`](input._internal_.GlobalEventHandlers.md), `ev`: [`KeyboardEvent`](../modules/input._internal_.md#keyboardevent)) => `any`

Fires when the user presses a key.

**`param`** The keyboard event

#### Inherited from

SVGGraphicsElement.onkeydown

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5750

___

### onkeypress

• **onkeypress**: ``null`` \| (`this`: [`GlobalEventHandlers`](input._internal_.GlobalEventHandlers.md), `ev`: [`KeyboardEvent`](../modules/input._internal_.md#keyboardevent)) => `any`

Fires when the user presses an alphanumeric key.

**`param`** The event.

**`deprecated`**

#### Inherited from

SVGGraphicsElement.onkeypress

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5756

___

### onkeyup

• **onkeyup**: ``null`` \| (`this`: [`GlobalEventHandlers`](input._internal_.GlobalEventHandlers.md), `ev`: [`KeyboardEvent`](../modules/input._internal_.md#keyboardevent)) => `any`

Fires when the user releases a key.

**`param`** The keyboard event

#### Inherited from

SVGGraphicsElement.onkeyup

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5761

___

### onlanguagechange

• **onlanguagechange**: ``null`` \| (`this`: [`WindowEventHandlers`](input._internal_.WindowEventHandlers.md), `ev`: [`Event`](../modules/input._internal_.md#event)) => `any`

#### Inherited from

[WindowEventHandlers](input._internal_.WindowEventHandlers.md).[onlanguagechange](input._internal_.WindowEventHandlers.md#onlanguagechange)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16772

___

### onload

• **onload**: ``null`` \| (`this`: [`GlobalEventHandlers`](input._internal_.GlobalEventHandlers.md), `ev`: [`Event`](../modules/input._internal_.md#event)) => `any`

Fires immediately after the browser loads the object.

**`param`** The event.

#### Inherited from

SVGGraphicsElement.onload

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5766

___

### onloadeddata

• **onloadeddata**: ``null`` \| (`this`: [`GlobalEventHandlers`](input._internal_.GlobalEventHandlers.md), `ev`: [`Event`](../modules/input._internal_.md#event)) => `any`

Occurs when media data is loaded at the current playback position.

**`param`** The event.

#### Inherited from

SVGGraphicsElement.onloadeddata

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5771

___

### onloadedmetadata

• **onloadedmetadata**: ``null`` \| (`this`: [`GlobalEventHandlers`](input._internal_.GlobalEventHandlers.md), `ev`: [`Event`](../modules/input._internal_.md#event)) => `any`

Occurs when the duration and dimensions of the media have been determined.

**`param`** The event.

#### Inherited from

SVGGraphicsElement.onloadedmetadata

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5776

___

### onloadstart

• **onloadstart**: ``null`` \| (`this`: [`GlobalEventHandlers`](input._internal_.GlobalEventHandlers.md), `ev`: [`Event`](../modules/input._internal_.md#event)) => `any`

Occurs when Internet Explorer begins looking for media data.

**`param`** The event.

#### Inherited from

SVGGraphicsElement.onloadstart

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5781

___

### onlostpointercapture

• **onlostpointercapture**: ``null`` \| (`this`: [`GlobalEventHandlers`](input._internal_.GlobalEventHandlers.md), `ev`: [`PointerEvent`](../modules/input._internal_.md#pointerevent)) => `any`

#### Inherited from

SVGGraphicsElement.onlostpointercapture

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5782

___

### onmessage

• **onmessage**: ``null`` \| (`this`: [`WindowEventHandlers`](input._internal_.WindowEventHandlers.md), `ev`: [`MessageEvent`](../modules/input._internal_.md#messageevent)<`any`\>) => `any`

#### Inherited from

[WindowEventHandlers](input._internal_.WindowEventHandlers.md).[onmessage](input._internal_.WindowEventHandlers.md#onmessage)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16773

___

### onmessageerror

• **onmessageerror**: ``null`` \| (`this`: [`WindowEventHandlers`](input._internal_.WindowEventHandlers.md), `ev`: [`MessageEvent`](../modules/input._internal_.md#messageevent)<`any`\>) => `any`

#### Inherited from

[WindowEventHandlers](input._internal_.WindowEventHandlers.md).[onmessageerror](input._internal_.WindowEventHandlers.md#onmessageerror)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16774

___

### onmousedown

• **onmousedown**: ``null`` \| (`this`: [`GlobalEventHandlers`](input._internal_.GlobalEventHandlers.md), `ev`: [`MouseEvent`](../modules/input._internal_.md#mouseevent)) => `any`

Fires when the user clicks the object with either mouse button.

**`param`** The mouse event.

#### Inherited from

SVGGraphicsElement.onmousedown

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5787

___

### onmouseenter

• **onmouseenter**: ``null`` \| (`this`: [`GlobalEventHandlers`](input._internal_.GlobalEventHandlers.md), `ev`: [`MouseEvent`](../modules/input._internal_.md#mouseevent)) => `any`

#### Inherited from

SVGGraphicsElement.onmouseenter

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5788

___

### onmouseleave

• **onmouseleave**: ``null`` \| (`this`: [`GlobalEventHandlers`](input._internal_.GlobalEventHandlers.md), `ev`: [`MouseEvent`](../modules/input._internal_.md#mouseevent)) => `any`

#### Inherited from

SVGGraphicsElement.onmouseleave

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5789

___

### onmousemove

• **onmousemove**: ``null`` \| (`this`: [`GlobalEventHandlers`](input._internal_.GlobalEventHandlers.md), `ev`: [`MouseEvent`](../modules/input._internal_.md#mouseevent)) => `any`

Fires when the user moves the mouse over the object.

**`param`** The mouse event.

#### Inherited from

SVGGraphicsElement.onmousemove

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5794

___

### onmouseout

• **onmouseout**: ``null`` \| (`this`: [`GlobalEventHandlers`](input._internal_.GlobalEventHandlers.md), `ev`: [`MouseEvent`](../modules/input._internal_.md#mouseevent)) => `any`

Fires when the user moves the mouse pointer outside the boundaries of the object.

**`param`** The mouse event.

#### Inherited from

SVGGraphicsElement.onmouseout

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5799

___

### onmouseover

• **onmouseover**: ``null`` \| (`this`: [`GlobalEventHandlers`](input._internal_.GlobalEventHandlers.md), `ev`: [`MouseEvent`](../modules/input._internal_.md#mouseevent)) => `any`

Fires when the user moves the mouse pointer into the object.

**`param`** The mouse event.

#### Inherited from

SVGGraphicsElement.onmouseover

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5804

___

### onmouseup

• **onmouseup**: ``null`` \| (`this`: [`GlobalEventHandlers`](input._internal_.GlobalEventHandlers.md), `ev`: [`MouseEvent`](../modules/input._internal_.md#mouseevent)) => `any`

Fires when the user releases a mouse button while the mouse is over the object.

**`param`** The mouse event.

#### Inherited from

SVGGraphicsElement.onmouseup

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5809

___

### onoffline

• **onoffline**: ``null`` \| (`this`: [`WindowEventHandlers`](input._internal_.WindowEventHandlers.md), `ev`: [`Event`](../modules/input._internal_.md#event)) => `any`

#### Inherited from

[WindowEventHandlers](input._internal_.WindowEventHandlers.md).[onoffline](input._internal_.WindowEventHandlers.md#onoffline)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16775

___

### ononline

• **ononline**: ``null`` \| (`this`: [`WindowEventHandlers`](input._internal_.WindowEventHandlers.md), `ev`: [`Event`](../modules/input._internal_.md#event)) => `any`

#### Inherited from

[WindowEventHandlers](input._internal_.WindowEventHandlers.md).[ononline](input._internal_.WindowEventHandlers.md#ononline)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16776

___

### onpagehide

• **onpagehide**: ``null`` \| (`this`: [`WindowEventHandlers`](input._internal_.WindowEventHandlers.md), `ev`: [`PageTransitionEvent`](../modules/input._internal_.md#pagetransitionevent)) => `any`

#### Inherited from

[WindowEventHandlers](input._internal_.WindowEventHandlers.md).[onpagehide](input._internal_.WindowEventHandlers.md#onpagehide)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16777

___

### onpageshow

• **onpageshow**: ``null`` \| (`this`: [`WindowEventHandlers`](input._internal_.WindowEventHandlers.md), `ev`: [`PageTransitionEvent`](../modules/input._internal_.md#pagetransitionevent)) => `any`

#### Inherited from

[WindowEventHandlers](input._internal_.WindowEventHandlers.md).[onpageshow](input._internal_.WindowEventHandlers.md#onpageshow)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16778

___

### onpaste

• **onpaste**: ``null`` \| (`this`: [`DocumentAndElementEventHandlers`](input._internal_.DocumentAndElementEventHandlers.md), `ev`: [`ClipboardEvent`](../modules/input._internal_.md#clipboardevent)) => `any`

#### Inherited from

SVGGraphicsElement.onpaste

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4710

___

### onpause

• **onpause**: ``null`` \| (`this`: [`GlobalEventHandlers`](input._internal_.GlobalEventHandlers.md), `ev`: [`Event`](../modules/input._internal_.md#event)) => `any`

Occurs when playback is paused.

**`param`** The event.

#### Inherited from

SVGGraphicsElement.onpause

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5814

___

### onplay

• **onplay**: ``null`` \| (`this`: [`GlobalEventHandlers`](input._internal_.GlobalEventHandlers.md), `ev`: [`Event`](../modules/input._internal_.md#event)) => `any`

Occurs when the play method is requested.

**`param`** The event.

#### Inherited from

SVGGraphicsElement.onplay

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5819

___

### onplaying

• **onplaying**: ``null`` \| (`this`: [`GlobalEventHandlers`](input._internal_.GlobalEventHandlers.md), `ev`: [`Event`](../modules/input._internal_.md#event)) => `any`

Occurs when the audio or video has started playing.

**`param`** The event.

#### Inherited from

SVGGraphicsElement.onplaying

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5824

___

### onpointercancel

• **onpointercancel**: ``null`` \| (`this`: [`GlobalEventHandlers`](input._internal_.GlobalEventHandlers.md), `ev`: [`PointerEvent`](../modules/input._internal_.md#pointerevent)) => `any`

#### Inherited from

SVGGraphicsElement.onpointercancel

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5825

___

### onpointerdown

• **onpointerdown**: ``null`` \| (`this`: [`GlobalEventHandlers`](input._internal_.GlobalEventHandlers.md), `ev`: [`PointerEvent`](../modules/input._internal_.md#pointerevent)) => `any`

#### Inherited from

SVGGraphicsElement.onpointerdown

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5826

___

### onpointerenter

• **onpointerenter**: ``null`` \| (`this`: [`GlobalEventHandlers`](input._internal_.GlobalEventHandlers.md), `ev`: [`PointerEvent`](../modules/input._internal_.md#pointerevent)) => `any`

#### Inherited from

SVGGraphicsElement.onpointerenter

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5827

___

### onpointerleave

• **onpointerleave**: ``null`` \| (`this`: [`GlobalEventHandlers`](input._internal_.GlobalEventHandlers.md), `ev`: [`PointerEvent`](../modules/input._internal_.md#pointerevent)) => `any`

#### Inherited from

SVGGraphicsElement.onpointerleave

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5828

___

### onpointermove

• **onpointermove**: ``null`` \| (`this`: [`GlobalEventHandlers`](input._internal_.GlobalEventHandlers.md), `ev`: [`PointerEvent`](../modules/input._internal_.md#pointerevent)) => `any`

#### Inherited from

SVGGraphicsElement.onpointermove

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5829

___

### onpointerout

• **onpointerout**: ``null`` \| (`this`: [`GlobalEventHandlers`](input._internal_.GlobalEventHandlers.md), `ev`: [`PointerEvent`](../modules/input._internal_.md#pointerevent)) => `any`

#### Inherited from

SVGGraphicsElement.onpointerout

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5830

___

### onpointerover

• **onpointerover**: ``null`` \| (`this`: [`GlobalEventHandlers`](input._internal_.GlobalEventHandlers.md), `ev`: [`PointerEvent`](../modules/input._internal_.md#pointerevent)) => `any`

#### Inherited from

SVGGraphicsElement.onpointerover

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5831

___

### onpointerup

• **onpointerup**: ``null`` \| (`this`: [`GlobalEventHandlers`](input._internal_.GlobalEventHandlers.md), `ev`: [`PointerEvent`](../modules/input._internal_.md#pointerevent)) => `any`

#### Inherited from

SVGGraphicsElement.onpointerup

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5832

___

### onpopstate

• **onpopstate**: ``null`` \| (`this`: [`WindowEventHandlers`](input._internal_.WindowEventHandlers.md), `ev`: [`PopStateEvent`](../modules/input._internal_.md#popstateevent)) => `any`

#### Inherited from

[WindowEventHandlers](input._internal_.WindowEventHandlers.md).[onpopstate](input._internal_.WindowEventHandlers.md#onpopstate)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16779

___

### onprogress

• **onprogress**: ``null`` \| (`this`: [`GlobalEventHandlers`](input._internal_.GlobalEventHandlers.md), `ev`: [`ProgressEvent`](../modules/input._internal_.md#progressevent)<[`EventTarget`](../modules/input._internal_.md#eventtarget)\>) => `any`

Occurs to indicate progress while downloading media data.

**`param`** The event.

#### Inherited from

SVGGraphicsElement.onprogress

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5837

___

### onratechange

• **onratechange**: ``null`` \| (`this`: [`GlobalEventHandlers`](input._internal_.GlobalEventHandlers.md), `ev`: [`Event`](../modules/input._internal_.md#event)) => `any`

Occurs when the playback rate is increased or decreased.

**`param`** The event.

#### Inherited from

SVGGraphicsElement.onratechange

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5842

___

### onrejectionhandled

• **onrejectionhandled**: ``null`` \| (`this`: [`WindowEventHandlers`](input._internal_.WindowEventHandlers.md), `ev`: [`PromiseRejectionEvent`](../modules/input._internal_.md#promiserejectionevent)) => `any`

#### Inherited from

[WindowEventHandlers](input._internal_.WindowEventHandlers.md).[onrejectionhandled](input._internal_.WindowEventHandlers.md#onrejectionhandled)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16780

___

### onreset

• **onreset**: ``null`` \| (`this`: [`GlobalEventHandlers`](input._internal_.GlobalEventHandlers.md), `ev`: [`Event`](../modules/input._internal_.md#event)) => `any`

Fires when the user resets a form.

**`param`** The event.

#### Inherited from

SVGGraphicsElement.onreset

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5847

___

### onresize

• **onresize**: ``null`` \| (`this`: [`GlobalEventHandlers`](input._internal_.GlobalEventHandlers.md), `ev`: [`UIEvent`](../modules/input._internal_.md#uievent)) => `any`

#### Inherited from

SVGGraphicsElement.onresize

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5848

___

### onscroll

• **onscroll**: ``null`` \| (`this`: [`GlobalEventHandlers`](input._internal_.GlobalEventHandlers.md), `ev`: [`Event`](../modules/input._internal_.md#event)) => `any`

Fires when the user repositions the scroll box in the scroll bar on the object.

**`param`** The event.

#### Inherited from

SVGGraphicsElement.onscroll

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5853

___

### onsecuritypolicyviolation

• **onsecuritypolicyviolation**: ``null`` \| (`this`: [`GlobalEventHandlers`](input._internal_.GlobalEventHandlers.md), `ev`: [`SecurityPolicyViolationEvent`](../modules/input._internal_.md#securitypolicyviolationevent)) => `any`

#### Inherited from

SVGGraphicsElement.onsecuritypolicyviolation

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5854

___

### onseeked

• **onseeked**: ``null`` \| (`this`: [`GlobalEventHandlers`](input._internal_.GlobalEventHandlers.md), `ev`: [`Event`](../modules/input._internal_.md#event)) => `any`

Occurs when the seek operation ends.

**`param`** The event.

#### Inherited from

SVGGraphicsElement.onseeked

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5859

___

### onseeking

• **onseeking**: ``null`` \| (`this`: [`GlobalEventHandlers`](input._internal_.GlobalEventHandlers.md), `ev`: [`Event`](../modules/input._internal_.md#event)) => `any`

Occurs when the current playback position is moved.

**`param`** The event.

#### Inherited from

SVGGraphicsElement.onseeking

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5864

___

### onselect

• **onselect**: ``null`` \| (`this`: [`GlobalEventHandlers`](input._internal_.GlobalEventHandlers.md), `ev`: [`Event`](../modules/input._internal_.md#event)) => `any`

Fires when the current selection changes.

**`param`** The event.

#### Inherited from

SVGGraphicsElement.onselect

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5869

___

### onselectionchange

• **onselectionchange**: ``null`` \| (`this`: [`GlobalEventHandlers`](input._internal_.GlobalEventHandlers.md), `ev`: [`Event`](../modules/input._internal_.md#event)) => `any`

#### Inherited from

SVGGraphicsElement.onselectionchange

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5870

___

### onselectstart

• **onselectstart**: ``null`` \| (`this`: [`GlobalEventHandlers`](input._internal_.GlobalEventHandlers.md), `ev`: [`Event`](../modules/input._internal_.md#event)) => `any`

#### Inherited from

SVGGraphicsElement.onselectstart

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5871

___

### onslotchange

• **onslotchange**: ``null`` \| (`this`: [`GlobalEventHandlers`](input._internal_.GlobalEventHandlers.md), `ev`: [`Event`](../modules/input._internal_.md#event)) => `any`

#### Inherited from

SVGGraphicsElement.onslotchange

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5872

___

### onstalled

• **onstalled**: ``null`` \| (`this`: [`GlobalEventHandlers`](input._internal_.GlobalEventHandlers.md), `ev`: [`Event`](../modules/input._internal_.md#event)) => `any`

Occurs when the download has stopped.

**`param`** The event.

#### Inherited from

SVGGraphicsElement.onstalled

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5877

___

### onstorage

• **onstorage**: ``null`` \| (`this`: [`WindowEventHandlers`](input._internal_.WindowEventHandlers.md), `ev`: [`StorageEvent`](../modules/input._internal_.md#storageevent)) => `any`

#### Inherited from

[WindowEventHandlers](input._internal_.WindowEventHandlers.md).[onstorage](input._internal_.WindowEventHandlers.md#onstorage)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16781

___

### onsubmit

• **onsubmit**: ``null`` \| (`this`: [`GlobalEventHandlers`](input._internal_.GlobalEventHandlers.md), `ev`: [`SubmitEvent`](../modules/input._internal_.md#submitevent)) => `any`

#### Inherited from

SVGGraphicsElement.onsubmit

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5878

___

### onsuspend

• **onsuspend**: ``null`` \| (`this`: [`GlobalEventHandlers`](input._internal_.GlobalEventHandlers.md), `ev`: [`Event`](../modules/input._internal_.md#event)) => `any`

Occurs if the load operation has been intentionally halted.

**`param`** The event.

#### Inherited from

SVGGraphicsElement.onsuspend

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5883

___

### ontimeupdate

• **ontimeupdate**: ``null`` \| (`this`: [`GlobalEventHandlers`](input._internal_.GlobalEventHandlers.md), `ev`: [`Event`](../modules/input._internal_.md#event)) => `any`

Occurs to indicate the current playback position.

**`param`** The event.

#### Inherited from

SVGGraphicsElement.ontimeupdate

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5888

___

### ontoggle

• **ontoggle**: ``null`` \| (`this`: [`GlobalEventHandlers`](input._internal_.GlobalEventHandlers.md), `ev`: [`Event`](../modules/input._internal_.md#event)) => `any`

#### Inherited from

SVGGraphicsElement.ontoggle

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5889

___

### ontouchcancel

• `Optional` **ontouchcancel**: ``null`` \| (`this`: [`GlobalEventHandlers`](input._internal_.GlobalEventHandlers.md), `ev`: [`TouchEvent`](../modules/input._internal_.md#touchevent)) => `any`

#### Inherited from

SVGGraphicsElement.ontouchcancel

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5890

___

### ontouchend

• `Optional` **ontouchend**: ``null`` \| (`this`: [`GlobalEventHandlers`](input._internal_.GlobalEventHandlers.md), `ev`: [`TouchEvent`](../modules/input._internal_.md#touchevent)) => `any`

#### Inherited from

SVGGraphicsElement.ontouchend

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5891

___

### ontouchmove

• `Optional` **ontouchmove**: ``null`` \| (`this`: [`GlobalEventHandlers`](input._internal_.GlobalEventHandlers.md), `ev`: [`TouchEvent`](../modules/input._internal_.md#touchevent)) => `any`

#### Inherited from

SVGGraphicsElement.ontouchmove

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5892

___

### ontouchstart

• `Optional` **ontouchstart**: ``null`` \| (`this`: [`GlobalEventHandlers`](input._internal_.GlobalEventHandlers.md), `ev`: [`TouchEvent`](../modules/input._internal_.md#touchevent)) => `any`

#### Inherited from

SVGGraphicsElement.ontouchstart

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5893

___

### ontransitioncancel

• **ontransitioncancel**: ``null`` \| (`this`: [`GlobalEventHandlers`](input._internal_.GlobalEventHandlers.md), `ev`: [`TransitionEvent`](../modules/input._internal_.md#transitionevent)) => `any`

#### Inherited from

SVGGraphicsElement.ontransitioncancel

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5894

___

### ontransitionend

• **ontransitionend**: ``null`` \| (`this`: [`GlobalEventHandlers`](input._internal_.GlobalEventHandlers.md), `ev`: [`TransitionEvent`](../modules/input._internal_.md#transitionevent)) => `any`

#### Inherited from

SVGGraphicsElement.ontransitionend

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5895

___

### ontransitionrun

• **ontransitionrun**: ``null`` \| (`this`: [`GlobalEventHandlers`](input._internal_.GlobalEventHandlers.md), `ev`: [`TransitionEvent`](../modules/input._internal_.md#transitionevent)) => `any`

#### Inherited from

SVGGraphicsElement.ontransitionrun

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5896

___

### ontransitionstart

• **ontransitionstart**: ``null`` \| (`this`: [`GlobalEventHandlers`](input._internal_.GlobalEventHandlers.md), `ev`: [`TransitionEvent`](../modules/input._internal_.md#transitionevent)) => `any`

#### Inherited from

SVGGraphicsElement.ontransitionstart

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5897

___

### onunhandledrejection

• **onunhandledrejection**: ``null`` \| (`this`: [`WindowEventHandlers`](input._internal_.WindowEventHandlers.md), `ev`: [`PromiseRejectionEvent`](../modules/input._internal_.md#promiserejectionevent)) => `any`

#### Inherited from

[WindowEventHandlers](input._internal_.WindowEventHandlers.md).[onunhandledrejection](input._internal_.WindowEventHandlers.md#onunhandledrejection)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16782

___

### onunload

• **onunload**: ``null`` \| (`this`: [`WindowEventHandlers`](input._internal_.WindowEventHandlers.md), `ev`: [`Event`](../modules/input._internal_.md#event)) => `any`

#### Inherited from

[WindowEventHandlers](input._internal_.WindowEventHandlers.md).[onunload](input._internal_.WindowEventHandlers.md#onunload)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16783

___

### onvolumechange

• **onvolumechange**: ``null`` \| (`this`: [`GlobalEventHandlers`](input._internal_.GlobalEventHandlers.md), `ev`: [`Event`](../modules/input._internal_.md#event)) => `any`

Occurs when the volume is changed, or playback is muted or unmuted.

**`param`** The event.

#### Inherited from

SVGGraphicsElement.onvolumechange

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5902

___

### onwaiting

• **onwaiting**: ``null`` \| (`this`: [`GlobalEventHandlers`](input._internal_.GlobalEventHandlers.md), `ev`: [`Event`](../modules/input._internal_.md#event)) => `any`

Occurs when playback stops because the next frame of a video resource is not available.

**`param`** The event.

#### Inherited from

SVGGraphicsElement.onwaiting

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5907

___

### onwebkitanimationend

• **onwebkitanimationend**: ``null`` \| (`this`: [`GlobalEventHandlers`](input._internal_.GlobalEventHandlers.md), `ev`: [`Event`](../modules/input._internal_.md#event)) => `any`

**`deprecated`** This is a legacy alias of `onanimationend`.

#### Inherited from

SVGGraphicsElement.onwebkitanimationend

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5909

___

### onwebkitanimationiteration

• **onwebkitanimationiteration**: ``null`` \| (`this`: [`GlobalEventHandlers`](input._internal_.GlobalEventHandlers.md), `ev`: [`Event`](../modules/input._internal_.md#event)) => `any`

**`deprecated`** This is a legacy alias of `onanimationiteration`.

#### Inherited from

SVGGraphicsElement.onwebkitanimationiteration

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5911

___

### onwebkitanimationstart

• **onwebkitanimationstart**: ``null`` \| (`this`: [`GlobalEventHandlers`](input._internal_.GlobalEventHandlers.md), `ev`: [`Event`](../modules/input._internal_.md#event)) => `any`

**`deprecated`** This is a legacy alias of `onanimationstart`.

#### Inherited from

SVGGraphicsElement.onwebkitanimationstart

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5913

___

### onwebkittransitionend

• **onwebkittransitionend**: ``null`` \| (`this`: [`GlobalEventHandlers`](input._internal_.GlobalEventHandlers.md), `ev`: [`Event`](../modules/input._internal_.md#event)) => `any`

**`deprecated`** This is a legacy alias of `ontransitionend`.

#### Inherited from

SVGGraphicsElement.onwebkittransitionend

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5915

___

### onwheel

• **onwheel**: ``null`` \| (`this`: [`GlobalEventHandlers`](input._internal_.GlobalEventHandlers.md), `ev`: [`WheelEvent`](../modules/input._internal_.md#wheelevent)) => `any`

#### Inherited from

SVGGraphicsElement.onwheel

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5916

___

### outerHTML

• **outerHTML**: `string`

#### Inherited from

SVGGraphicsElement.outerHTML

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4869

___

### ownerDocument

• `Readonly` **ownerDocument**: [`Document`](../modules/input._internal_.md#document)

#### Inherited from

SVGGraphicsElement.ownerDocument

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4870

___

### ownerSVGElement

• `Readonly` **ownerSVGElement**: ``null`` \| [`SVGSVGElement`](../modules/input._internal_.md#svgsvgelement)

#### Inherited from

SVGGraphicsElement.ownerSVGElement

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11964

___

### parentElement

• `Readonly` **parentElement**: ``null`` \| [`HTMLElement`](../modules/input._internal_.md#htmlelement)

Returns the parent element.

#### Inherited from

SVGGraphicsElement.parentElement

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10061

___

### parentNode

• `Readonly` **parentNode**: ``null`` \| [`ParentNode`](input._internal_.ParentNode.md)

Returns the parent.

#### Inherited from

SVGGraphicsElement.parentNode

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10063

___

### part

• `Readonly` **part**: [`DOMTokenList`](../modules/input._internal_.md#domtokenlist)

#### Inherited from

SVGGraphicsElement.part

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4871

___

### prefix

• `Readonly` **prefix**: ``null`` \| `string`

Returns the namespace prefix.

#### Inherited from

SVGGraphicsElement.prefix

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4873

___

### preserveAspectRatio

• `Readonly` **preserveAspectRatio**: [`SVGAnimatedPreserveAspectRatio`](../modules/input._internal_.md#svganimatedpreserveaspectratio)

#### Inherited from

[SVGFitToViewBox](input._internal_.SVGFitToViewBox.md).[preserveAspectRatio](input._internal_.SVGFitToViewBox.md#preserveaspectratio)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:12521

___

### previousElementSibling

• `Readonly` **previousElementSibling**: ``null`` \| [`Element`](../modules/input._internal_.md#element)

Returns the first preceding sibling that is an element, and null otherwise.

#### Inherited from

SVGGraphicsElement.previousElementSibling

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10211

___

### previousSibling

• `Readonly` **previousSibling**: ``null`` \| [`ChildNode`](input._internal_.ChildNode.md)

Returns the previous sibling.

#### Inherited from

SVGGraphicsElement.previousSibling

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10065

___

### requiredExtensions

• `Readonly` **requiredExtensions**: [`SVGStringList`](../modules/input._internal_.md#svgstringlist)

#### Inherited from

SVGGraphicsElement.requiredExtensions

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13146

___

### scrollHeight

• `Readonly` **scrollHeight**: `number`

#### Inherited from

SVGGraphicsElement.scrollHeight

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4874

___

### scrollLeft

• **scrollLeft**: `number`

#### Inherited from

SVGGraphicsElement.scrollLeft

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4875

___

### scrollTop

• **scrollTop**: `number`

#### Inherited from

SVGGraphicsElement.scrollTop

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4876

___

### scrollWidth

• `Readonly` **scrollWidth**: `number`

#### Inherited from

SVGGraphicsElement.scrollWidth

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4877

___

### shadowRoot

• `Readonly` **shadowRoot**: ``null`` \| [`ShadowRoot`](../modules/input._internal_.md#shadowroot)

Returns element's shadow root, if any, and if shadow root's mode is "open", and null otherwise.

#### Inherited from

SVGGraphicsElement.shadowRoot

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4879

___

### slot

• **slot**: `string`

Returns the value of element's slot content attribute. Can be set to change it.

#### Inherited from

SVGGraphicsElement.slot

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4881

___

### style

• `Readonly` **style**: [`CSSStyleDeclaration`](../modules/input._internal_.md#cssstyledeclaration)

#### Inherited from

SVGGraphicsElement.style

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4967

___

### systemLanguage

• `Readonly` **systemLanguage**: [`SVGStringList`](../modules/input._internal_.md#svgstringlist)

#### Inherited from

SVGGraphicsElement.systemLanguage

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13147

___

### tabIndex

• **tabIndex**: `number`

#### Inherited from

SVGGraphicsElement.tabIndex

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7550

___

### tagName

• `Readonly` **tagName**: `string`

Returns the HTML-uppercased qualified name.

#### Inherited from

SVGGraphicsElement.tagName

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4883

___

### textContent

• **textContent**: ``null`` \| `string`

#### Inherited from

SVGGraphicsElement.textContent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10066

___

### transform

• `Readonly` **transform**: [`SVGAnimatedTransformList`](../modules/input._internal_.md#svganimatedtransformlist)

#### Inherited from

SVGGraphicsElement.transform

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:12598

___

### viewBox

• `Readonly` **viewBox**: [`SVGAnimatedRect`](../modules/input._internal_.md#svganimatedrect)

#### Inherited from

[SVGFitToViewBox](input._internal_.SVGFitToViewBox.md).[viewBox](input._internal_.SVGFitToViewBox.md#viewbox)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:12522

___

### viewportElement

• `Readonly` **viewportElement**: ``null`` \| [`SVGElement`](../modules/input._internal_.md#svgelement)

#### Inherited from

SVGGraphicsElement.viewportElement

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11965

___

### width

• `Readonly` **width**: [`SVGAnimatedLength`](../modules/input._internal_.md#svganimatedlength)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:12989

___

### x

• `Readonly` **x**: [`SVGAnimatedLength`](../modules/input._internal_.md#svganimatedlength)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:12990

___

### y

• `Readonly` **y**: [`SVGAnimatedLength`](../modules/input._internal_.md#svganimatedlength)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:12991

## Methods

### addEventListener

▸ **addEventListener**<`K`\>(`type`, `listener`, `options?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`SVGSVGElementEventMap`](input._internal_.SVGSVGElementEventMap.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`this`: [`SVGSVGElement`](../modules/input._internal_.md#svgsvgelement), `ev`: [`SVGSVGElementEventMap`](input._internal_.SVGSVGElementEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`AddEventListenerOptions`](input._internal_.AddEventListenerOptions.md) |

#### Returns

`void`

#### Overrides

[WindowEventHandlers](input._internal_.WindowEventHandlers.md).[addEventListener](input._internal_.WindowEventHandlers.md#addeventlistener)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13019

▸ **addEventListener**(`type`, `listener`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `listener` | [`EventListenerOrEventListenerObject`](../modules/input._internal_.md#eventlisteneroreventlistenerobject) |
| `options?` | `boolean` \| [`AddEventListenerOptions`](input._internal_.AddEventListenerOptions.md) |

#### Returns

`void`

#### Overrides

[WindowEventHandlers](input._internal_.WindowEventHandlers.md).[addEventListener](input._internal_.WindowEventHandlers.md#addeventlistener)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13020

___

### after

▸ **after**(...`nodes`): `void`

Inserts nodes just after node, while replacing strings in nodes with equivalent Text nodes.

Throws a "HierarchyRequestError" DOMException if the constraints of the node tree are violated.

#### Parameters

| Name | Type |
| :------ | :------ |
| `...nodes` | (`string` \| [`Node`](../modules/input._internal_.md#node))[] |

#### Returns

`void`

#### Inherited from

SVGGraphicsElement.after

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3574

___

### animate

▸ **animate**(`keyframes`, `options?`): [`Animation`](../modules/input._internal_.md#animation)

#### Parameters

| Name | Type |
| :------ | :------ |
| `keyframes` | ``null`` \| [`Keyframe`](input._internal_.Keyframe.md)[] \| [`PropertyIndexedKeyframes`](input._internal_.PropertyIndexedKeyframes.md) |
| `options?` | `number` \| [`KeyframeAnimationOptions`](input._internal_.KeyframeAnimationOptions.md) |

#### Returns

[`Animation`](../modules/input._internal_.md#animation)

#### Inherited from

SVGGraphicsElement.animate

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2047

___

### animationsPaused

▸ **animationsPaused**(): `boolean`

#### Returns

`boolean`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:12992

___

### append

▸ **append**(...`nodes`): `void`

Inserts nodes after the last child of node, while replacing strings in nodes with equivalent Text nodes.

Throws a "HierarchyRequestError" DOMException if the constraints of the node tree are violated.

#### Parameters

| Name | Type |
| :------ | :------ |
| `...nodes` | (`string` \| [`Node`](../modules/input._internal_.md#node))[] |

#### Returns

`void`

#### Inherited from

SVGGraphicsElement.append

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10419

___

### appendChild

▸ **appendChild**<`T`\>(`node`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Node`](../modules/input._internal_.md#node) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `T` |

#### Returns

`T`

#### Inherited from

SVGGraphicsElement.appendChild

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10067

___

### attachShadow

▸ **attachShadow**(`init`): [`ShadowRoot`](../modules/input._internal_.md#shadowroot)

Creates a shadow root for element and returns it.

#### Parameters

| Name | Type |
| :------ | :------ |
| `init` | [`ShadowRootInit`](input._internal_.ShadowRootInit.md) |

#### Returns

[`ShadowRoot`](../modules/input._internal_.md#shadowroot)

#### Inherited from

SVGGraphicsElement.attachShadow

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4885

___

### before

▸ **before**(...`nodes`): `void`

Inserts nodes just before node, while replacing strings in nodes with equivalent Text nodes.

Throws a "HierarchyRequestError" DOMException if the constraints of the node tree are violated.

#### Parameters

| Name | Type |
| :------ | :------ |
| `...nodes` | (`string` \| [`Node`](../modules/input._internal_.md#node))[] |

#### Returns

`void`

#### Inherited from

SVGGraphicsElement.before

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3580

___

### blur

▸ **blur**(): `void`

#### Returns

`void`

#### Inherited from

SVGGraphicsElement.blur

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7551

___

### checkEnclosure

▸ **checkEnclosure**(`element`, `rect`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `element` | [`SVGElement`](../modules/input._internal_.md#svgelement) |
| `rect` | [`DOMRectReadOnly`](../modules/input._internal_.md#domrectreadonly) |

#### Returns

`boolean`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:12993

___

### checkIntersection

▸ **checkIntersection**(`element`, `rect`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `element` | [`SVGElement`](../modules/input._internal_.md#svgelement) |
| `rect` | [`DOMRectReadOnly`](../modules/input._internal_.md#domrectreadonly) |

#### Returns

`boolean`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:12994

___

### cloneNode

▸ **cloneNode**(`deep?`): [`Node`](../modules/input._internal_.md#node)

Returns a copy of node. If deep is true, the copy also includes the node's descendants.

#### Parameters

| Name | Type |
| :------ | :------ |
| `deep?` | `boolean` |

#### Returns

[`Node`](../modules/input._internal_.md#node)

#### Inherited from

SVGGraphicsElement.cloneNode

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10069

___

### closest

▸ **closest**<`K`\>(`selector`): ``null`` \| [`HTMLElementTagNameMap`](input._internal_.HTMLElementTagNameMap.md)[`K`]

Returns the first (starting at element) inclusive ancestor that matches selectors, and null otherwise.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`HTMLElementTagNameMap`](input._internal_.HTMLElementTagNameMap.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | `K` |

#### Returns

``null`` \| [`HTMLElementTagNameMap`](input._internal_.HTMLElementTagNameMap.md)[`K`]

#### Inherited from

SVGGraphicsElement.closest

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4887

▸ **closest**<`K`\>(`selector`): ``null`` \| [`SVGElementTagNameMap`](input._internal_.SVGElementTagNameMap.md)[`K`]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`SVGElementTagNameMap`](input._internal_.SVGElementTagNameMap.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | `K` |

#### Returns

``null`` \| [`SVGElementTagNameMap`](input._internal_.SVGElementTagNameMap.md)[`K`]

#### Inherited from

SVGGraphicsElement.closest

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4888

▸ **closest**<`E`\>(`selectors`): ``null`` \| `E`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends [`Element`](../modules/input._internal_.md#element) = [`Element`](../modules/input._internal_.md#element) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selectors` | `string` |

#### Returns

``null`` \| `E`

#### Inherited from

SVGGraphicsElement.closest

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4889

___

### compareDocumentPosition

▸ **compareDocumentPosition**(`other`): `number`

Returns a bitmask indicating the position of other relative to node.

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`Node`](../modules/input._internal_.md#node) |

#### Returns

`number`

#### Inherited from

SVGGraphicsElement.compareDocumentPosition

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10071

___

### contains

▸ **contains**(`other`): `boolean`

Returns true if other is an inclusive descendant of node, and false otherwise.

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | ``null`` \| [`Node`](../modules/input._internal_.md#node) |

#### Returns

`boolean`

#### Inherited from

SVGGraphicsElement.contains

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10073

___

### createSVGAngle

▸ **createSVGAngle**(): [`SVGAngle`](../modules/input._internal_.md#svgangle)

#### Returns

[`SVGAngle`](../modules/input._internal_.md#svgangle)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:12995

___

### createSVGLength

▸ **createSVGLength**(): [`SVGLength`](../modules/input._internal_.md#svglength)

#### Returns

[`SVGLength`](../modules/input._internal_.md#svglength)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:12996

___

### createSVGMatrix

▸ **createSVGMatrix**(): [`DOMMatrix`](../modules/input._internal_.md#dommatrix)

#### Returns

[`DOMMatrix`](../modules/input._internal_.md#dommatrix)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:12997

___

### createSVGNumber

▸ **createSVGNumber**(): [`SVGNumber`](../modules/input._internal_.md#svgnumber)

#### Returns

[`SVGNumber`](../modules/input._internal_.md#svgnumber)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:12998

___

### createSVGPoint

▸ **createSVGPoint**(): [`DOMPoint`](../modules/input._internal_.md#dompoint)

#### Returns

[`DOMPoint`](../modules/input._internal_.md#dompoint)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:12999

___

### createSVGRect

▸ **createSVGRect**(): [`DOMRect`](../modules/input._internal_.md#domrect)

#### Returns

[`DOMRect`](../modules/input._internal_.md#domrect)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13000

___

### createSVGTransform

▸ **createSVGTransform**(): [`SVGTransform`](../modules/input._internal_.md#svgtransform)

#### Returns

[`SVGTransform`](../modules/input._internal_.md#svgtransform)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13001

___

### createSVGTransformFromMatrix

▸ **createSVGTransformFromMatrix**(`matrix?`): [`SVGTransform`](../modules/input._internal_.md#svgtransform)

#### Parameters

| Name | Type |
| :------ | :------ |
| `matrix?` | [`DOMMatrix2DInit`](input._internal_.DOMMatrix2DInit.md) |

#### Returns

[`SVGTransform`](../modules/input._internal_.md#svgtransform)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13002

___

### deselectAll

▸ **deselectAll**(): `void`

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13003

___

### dispatchEvent

▸ **dispatchEvent**(`event`): `boolean`

Dispatches a synthetic event event to target and returns true if either event's cancelable attribute value is false or its preventDefault() method was not invoked, and false otherwise.

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`Event`](../modules/input._internal_.md#event) |

#### Returns

`boolean`

#### Inherited from

SVGGraphicsElement.dispatchEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5138

___

### focus

▸ **focus**(`options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`FocusOptions`](input._internal_.FocusOptions.md) |

#### Returns

`void`

#### Inherited from

SVGGraphicsElement.focus

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7552

___

### forceRedraw

▸ **forceRedraw**(): `void`

**`deprecated`**

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13005

___

### getAnimations

▸ **getAnimations**(`options?`): [`Animation`](../modules/input._internal_.md#animation)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`GetAnimationsOptions`](input._internal_.GetAnimationsOptions.md) |

#### Returns

[`Animation`](../modules/input._internal_.md#animation)[]

#### Inherited from

SVGGraphicsElement.getAnimations

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2048

___

### getAttribute

▸ **getAttribute**(`qualifiedName`): ``null`` \| `string`

Returns element's first attribute whose qualified name is qualifiedName, and null if there is no such attribute otherwise.

#### Parameters

| Name | Type |
| :------ | :------ |
| `qualifiedName` | `string` |

#### Returns

``null`` \| `string`

#### Inherited from

SVGGraphicsElement.getAttribute

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4891

___

### getAttributeNS

▸ **getAttributeNS**(`namespace`, `localName`): ``null`` \| `string`

Returns element's attribute whose namespace is namespace and local name is localName, and null if there is no such attribute otherwise.

#### Parameters

| Name | Type |
| :------ | :------ |
| `namespace` | ``null`` \| `string` |
| `localName` | `string` |

#### Returns

``null`` \| `string`

#### Inherited from

SVGGraphicsElement.getAttributeNS

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4893

___

### getAttributeNames

▸ **getAttributeNames**(): `string`[]

Returns the qualified names of all element's attributes. Can contain duplicates.

#### Returns

`string`[]

#### Inherited from

SVGGraphicsElement.getAttributeNames

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4895

___

### getAttributeNode

▸ **getAttributeNode**(`qualifiedName`): ``null`` \| [`Attr`](../modules/input._internal_.md#attr)

#### Parameters

| Name | Type |
| :------ | :------ |
| `qualifiedName` | `string` |

#### Returns

``null`` \| [`Attr`](../modules/input._internal_.md#attr)

#### Inherited from

SVGGraphicsElement.getAttributeNode

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4896

___

### getAttributeNodeNS

▸ **getAttributeNodeNS**(`namespace`, `localName`): ``null`` \| [`Attr`](../modules/input._internal_.md#attr)

#### Parameters

| Name | Type |
| :------ | :------ |
| `namespace` | ``null`` \| `string` |
| `localName` | `string` |

#### Returns

``null`` \| [`Attr`](../modules/input._internal_.md#attr)

#### Inherited from

SVGGraphicsElement.getAttributeNodeNS

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4897

___

### getBBox

▸ **getBBox**(`options?`): [`DOMRect`](../modules/input._internal_.md#domrect)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`SVGBoundingBoxOptions`](input._internal_.SVGBoundingBoxOptions.md) |

#### Returns

[`DOMRect`](../modules/input._internal_.md#domrect)

#### Inherited from

SVGGraphicsElement.getBBox

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:12599

___

### getBoundingClientRect

▸ **getBoundingClientRect**(): [`DOMRect`](../modules/input._internal_.md#domrect)

#### Returns

[`DOMRect`](../modules/input._internal_.md#domrect)

#### Inherited from

SVGGraphicsElement.getBoundingClientRect

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4898

___

### getCTM

▸ **getCTM**(): ``null`` \| [`DOMMatrix`](../modules/input._internal_.md#dommatrix)

#### Returns

``null`` \| [`DOMMatrix`](../modules/input._internal_.md#dommatrix)

#### Inherited from

SVGGraphicsElement.getCTM

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:12600

___

### getClientRects

▸ **getClientRects**(): [`DOMRectList`](../modules/input._internal_.md#domrectlist)

#### Returns

[`DOMRectList`](../modules/input._internal_.md#domrectlist)

#### Inherited from

SVGGraphicsElement.getClientRects

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4899

___

### getCurrentTime

▸ **getCurrentTime**(): `number`

#### Returns

`number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13006

___

### getElementById

▸ **getElementById**(`elementId`): [`Element`](../modules/input._internal_.md#element)

#### Parameters

| Name | Type |
| :------ | :------ |
| `elementId` | `string` |

#### Returns

[`Element`](../modules/input._internal_.md#element)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13007

___

### getElementsByClassName

▸ **getElementsByClassName**(`classNames`): [`HTMLCollectionOf`](input._internal_.HTMLCollectionOf.md)<[`Element`](../modules/input._internal_.md#element)\>

Returns a HTMLCollection of the elements in the object on which the method was invoked (a document or an element) that have all the classes given by classNames. The classNames argument is interpreted as a space-separated list of classes.

#### Parameters

| Name | Type |
| :------ | :------ |
| `classNames` | `string` |

#### Returns

[`HTMLCollectionOf`](input._internal_.HTMLCollectionOf.md)<[`Element`](../modules/input._internal_.md#element)\>

#### Inherited from

SVGGraphicsElement.getElementsByClassName

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4901

___

### getElementsByTagName

▸ **getElementsByTagName**<`K`\>(`qualifiedName`): [`HTMLCollectionOf`](input._internal_.HTMLCollectionOf.md)<[`HTMLElementTagNameMap`](input._internal_.HTMLElementTagNameMap.md)[`K`]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`HTMLElementTagNameMap`](input._internal_.HTMLElementTagNameMap.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `qualifiedName` | `K` |

#### Returns

[`HTMLCollectionOf`](input._internal_.HTMLCollectionOf.md)<[`HTMLElementTagNameMap`](input._internal_.HTMLElementTagNameMap.md)[`K`]\>

#### Inherited from

SVGGraphicsElement.getElementsByTagName

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4902

▸ **getElementsByTagName**<`K`\>(`qualifiedName`): [`HTMLCollectionOf`](input._internal_.HTMLCollectionOf.md)<[`SVGElementTagNameMap`](input._internal_.SVGElementTagNameMap.md)[`K`]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`SVGElementTagNameMap`](input._internal_.SVGElementTagNameMap.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `qualifiedName` | `K` |

#### Returns

[`HTMLCollectionOf`](input._internal_.HTMLCollectionOf.md)<[`SVGElementTagNameMap`](input._internal_.SVGElementTagNameMap.md)[`K`]\>

#### Inherited from

SVGGraphicsElement.getElementsByTagName

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4903

▸ **getElementsByTagName**(`qualifiedName`): [`HTMLCollectionOf`](input._internal_.HTMLCollectionOf.md)<[`Element`](../modules/input._internal_.md#element)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `qualifiedName` | `string` |

#### Returns

[`HTMLCollectionOf`](input._internal_.HTMLCollectionOf.md)<[`Element`](../modules/input._internal_.md#element)\>

#### Inherited from

SVGGraphicsElement.getElementsByTagName

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4904

___

### getElementsByTagNameNS

▸ **getElementsByTagNameNS**(`namespaceURI`, `localName`): [`HTMLCollectionOf`](input._internal_.HTMLCollectionOf.md)<[`HTMLElement`](../modules/input._internal_.md#htmlelement)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `namespaceURI` | ``"http://www.w3.org/1999/xhtml"`` |
| `localName` | `string` |

#### Returns

[`HTMLCollectionOf`](input._internal_.HTMLCollectionOf.md)<[`HTMLElement`](../modules/input._internal_.md#htmlelement)\>

#### Inherited from

SVGGraphicsElement.getElementsByTagNameNS

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4905

▸ **getElementsByTagNameNS**(`namespaceURI`, `localName`): [`HTMLCollectionOf`](input._internal_.HTMLCollectionOf.md)<[`SVGElement`](../modules/input._internal_.md#svgelement)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `namespaceURI` | ``"http://www.w3.org/2000/svg"`` |
| `localName` | `string` |

#### Returns

[`HTMLCollectionOf`](input._internal_.HTMLCollectionOf.md)<[`SVGElement`](../modules/input._internal_.md#svgelement)\>

#### Inherited from

SVGGraphicsElement.getElementsByTagNameNS

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4906

▸ **getElementsByTagNameNS**(`namespace`, `localName`): [`HTMLCollectionOf`](input._internal_.HTMLCollectionOf.md)<[`Element`](../modules/input._internal_.md#element)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `namespace` | ``null`` \| `string` |
| `localName` | `string` |

#### Returns

[`HTMLCollectionOf`](input._internal_.HTMLCollectionOf.md)<[`Element`](../modules/input._internal_.md#element)\>

#### Inherited from

SVGGraphicsElement.getElementsByTagNameNS

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4907

___

### getEnclosureList

▸ **getEnclosureList**(`rect`, `referenceElement`): [`NodeListOf`](input._internal_.NodeListOf.md)<[`SVGCircleElement`](../modules/input._internal_.md#svgcircleelement) \| [`SVGEllipseElement`](../modules/input._internal_.md#svgellipseelement) \| [`SVGImageElement`](../modules/input._internal_.md#svgimageelement) \| [`SVGLineElement`](../modules/input._internal_.md#svglineelement) \| [`SVGPathElement`](../modules/input._internal_.md#svgpathelement) \| [`SVGPolygonElement`](../modules/input._internal_.md#svgpolygonelement) \| [`SVGPolylineElement`](../modules/input._internal_.md#svgpolylineelement) \| [`SVGRectElement`](../modules/input._internal_.md#svgrectelement) \| [`SVGTextElement`](../modules/input._internal_.md#svgtextelement) \| [`SVGUseElement`](../modules/input._internal_.md#svguseelement)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `rect` | [`DOMRectReadOnly`](../modules/input._internal_.md#domrectreadonly) |
| `referenceElement` | ``null`` \| [`SVGElement`](../modules/input._internal_.md#svgelement) |

#### Returns

[`NodeListOf`](input._internal_.NodeListOf.md)<[`SVGCircleElement`](../modules/input._internal_.md#svgcircleelement) \| [`SVGEllipseElement`](../modules/input._internal_.md#svgellipseelement) \| [`SVGImageElement`](../modules/input._internal_.md#svgimageelement) \| [`SVGLineElement`](../modules/input._internal_.md#svglineelement) \| [`SVGPathElement`](../modules/input._internal_.md#svgpathelement) \| [`SVGPolygonElement`](../modules/input._internal_.md#svgpolygonelement) \| [`SVGPolylineElement`](../modules/input._internal_.md#svgpolylineelement) \| [`SVGRectElement`](../modules/input._internal_.md#svgrectelement) \| [`SVGTextElement`](../modules/input._internal_.md#svgtextelement) \| [`SVGUseElement`](../modules/input._internal_.md#svguseelement)\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13008

___

### getIntersectionList

▸ **getIntersectionList**(`rect`, `referenceElement`): [`NodeListOf`](input._internal_.NodeListOf.md)<[`SVGCircleElement`](../modules/input._internal_.md#svgcircleelement) \| [`SVGEllipseElement`](../modules/input._internal_.md#svgellipseelement) \| [`SVGImageElement`](../modules/input._internal_.md#svgimageelement) \| [`SVGLineElement`](../modules/input._internal_.md#svglineelement) \| [`SVGPathElement`](../modules/input._internal_.md#svgpathelement) \| [`SVGPolygonElement`](../modules/input._internal_.md#svgpolygonelement) \| [`SVGPolylineElement`](../modules/input._internal_.md#svgpolylineelement) \| [`SVGRectElement`](../modules/input._internal_.md#svgrectelement) \| [`SVGTextElement`](../modules/input._internal_.md#svgtextelement) \| [`SVGUseElement`](../modules/input._internal_.md#svguseelement)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `rect` | [`DOMRectReadOnly`](../modules/input._internal_.md#domrectreadonly) |
| `referenceElement` | ``null`` \| [`SVGElement`](../modules/input._internal_.md#svgelement) |

#### Returns

[`NodeListOf`](input._internal_.NodeListOf.md)<[`SVGCircleElement`](../modules/input._internal_.md#svgcircleelement) \| [`SVGEllipseElement`](../modules/input._internal_.md#svgellipseelement) \| [`SVGImageElement`](../modules/input._internal_.md#svgimageelement) \| [`SVGLineElement`](../modules/input._internal_.md#svglineelement) \| [`SVGPathElement`](../modules/input._internal_.md#svgpathelement) \| [`SVGPolygonElement`](../modules/input._internal_.md#svgpolygonelement) \| [`SVGPolylineElement`](../modules/input._internal_.md#svgpolylineelement) \| [`SVGRectElement`](../modules/input._internal_.md#svgrectelement) \| [`SVGTextElement`](../modules/input._internal_.md#svgtextelement) \| [`SVGUseElement`](../modules/input._internal_.md#svguseelement)\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13009

___

### getRootNode

▸ **getRootNode**(`options?`): [`Node`](../modules/input._internal_.md#node)

Returns node's root.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`GetRootNodeOptions`](input._internal_.GetRootNodeOptions.md) |

#### Returns

[`Node`](../modules/input._internal_.md#node)

#### Inherited from

SVGGraphicsElement.getRootNode

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10075

___

### getScreenCTM

▸ **getScreenCTM**(): ``null`` \| [`DOMMatrix`](../modules/input._internal_.md#dommatrix)

#### Returns

``null`` \| [`DOMMatrix`](../modules/input._internal_.md#dommatrix)

#### Inherited from

SVGGraphicsElement.getScreenCTM

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:12601

___

### hasAttribute

▸ **hasAttribute**(`qualifiedName`): `boolean`

Returns true if element has an attribute whose qualified name is qualifiedName, and false otherwise.

#### Parameters

| Name | Type |
| :------ | :------ |
| `qualifiedName` | `string` |

#### Returns

`boolean`

#### Inherited from

SVGGraphicsElement.hasAttribute

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4909

___

### hasAttributeNS

▸ **hasAttributeNS**(`namespace`, `localName`): `boolean`

Returns true if element has an attribute whose namespace is namespace and local name is localName.

#### Parameters

| Name | Type |
| :------ | :------ |
| `namespace` | ``null`` \| `string` |
| `localName` | `string` |

#### Returns

`boolean`

#### Inherited from

SVGGraphicsElement.hasAttributeNS

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4911

___

### hasAttributes

▸ **hasAttributes**(): `boolean`

Returns true if element has attributes, and false otherwise.

#### Returns

`boolean`

#### Inherited from

SVGGraphicsElement.hasAttributes

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4913

___

### hasChildNodes

▸ **hasChildNodes**(): `boolean`

Returns whether node has children.

#### Returns

`boolean`

#### Inherited from

SVGGraphicsElement.hasChildNodes

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10077

___

### hasPointerCapture

▸ **hasPointerCapture**(`pointerId`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pointerId` | `number` |

#### Returns

`boolean`

#### Inherited from

SVGGraphicsElement.hasPointerCapture

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4914

___

### insertAdjacentElement

▸ **insertAdjacentElement**(`where`, `element`): ``null`` \| [`Element`](../modules/input._internal_.md#element)

#### Parameters

| Name | Type |
| :------ | :------ |
| `where` | [`InsertPosition`](../modules/input._internal_.md#insertposition) |
| `element` | [`Element`](../modules/input._internal_.md#element) |

#### Returns

``null`` \| [`Element`](../modules/input._internal_.md#element)

#### Inherited from

SVGGraphicsElement.insertAdjacentElement

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4915

___

### insertAdjacentHTML

▸ **insertAdjacentHTML**(`position`, `text`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `position` | [`InsertPosition`](../modules/input._internal_.md#insertposition) |
| `text` | `string` |

#### Returns

`void`

#### Inherited from

SVGGraphicsElement.insertAdjacentHTML

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4916

___

### insertAdjacentText

▸ **insertAdjacentText**(`where`, `data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `where` | [`InsertPosition`](../modules/input._internal_.md#insertposition) |
| `data` | `string` |

#### Returns

`void`

#### Inherited from

SVGGraphicsElement.insertAdjacentText

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4917

___

### insertBefore

▸ **insertBefore**<`T`\>(`node`, `child`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Node`](../modules/input._internal_.md#node) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `T` |
| `child` | ``null`` \| [`Node`](../modules/input._internal_.md#node) |

#### Returns

`T`

#### Inherited from

SVGGraphicsElement.insertBefore

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10078

___

### isDefaultNamespace

▸ **isDefaultNamespace**(`namespace`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `namespace` | ``null`` \| `string` |

#### Returns

`boolean`

#### Inherited from

SVGGraphicsElement.isDefaultNamespace

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10079

___

### isEqualNode

▸ **isEqualNode**(`otherNode`): `boolean`

Returns whether node and otherNode have the same properties.

#### Parameters

| Name | Type |
| :------ | :------ |
| `otherNode` | ``null`` \| [`Node`](../modules/input._internal_.md#node) |

#### Returns

`boolean`

#### Inherited from

SVGGraphicsElement.isEqualNode

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10081

___

### isSameNode

▸ **isSameNode**(`otherNode`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `otherNode` | ``null`` \| [`Node`](../modules/input._internal_.md#node) |

#### Returns

`boolean`

#### Inherited from

SVGGraphicsElement.isSameNode

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10082

___

### lookupNamespaceURI

▸ **lookupNamespaceURI**(`prefix`): ``null`` \| `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `prefix` | ``null`` \| `string` |

#### Returns

``null`` \| `string`

#### Inherited from

SVGGraphicsElement.lookupNamespaceURI

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10083

___

### lookupPrefix

▸ **lookupPrefix**(`namespace`): ``null`` \| `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `namespace` | ``null`` \| `string` |

#### Returns

``null`` \| `string`

#### Inherited from

SVGGraphicsElement.lookupPrefix

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10084

___

### matches

▸ **matches**(`selectors`): `boolean`

Returns true if matching selectors against element's root yields element, and false otherwise.

#### Parameters

| Name | Type |
| :------ | :------ |
| `selectors` | `string` |

#### Returns

`boolean`

#### Inherited from

SVGGraphicsElement.matches

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4919

___

### normalize

▸ **normalize**(): `void`

Removes empty exclusive Text nodes and concatenates the data of remaining contiguous exclusive Text nodes into the first of their nodes.

#### Returns

`void`

#### Inherited from

SVGGraphicsElement.normalize

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10086

___

### pauseAnimations

▸ **pauseAnimations**(): `void`

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13010

___

### prepend

▸ **prepend**(...`nodes`): `void`

Inserts nodes before the first child of node, while replacing strings in nodes with equivalent Text nodes.

Throws a "HierarchyRequestError" DOMException if the constraints of the node tree are violated.

#### Parameters

| Name | Type |
| :------ | :------ |
| `...nodes` | (`string` \| [`Node`](../modules/input._internal_.md#node))[] |

#### Returns

`void`

#### Inherited from

SVGGraphicsElement.prepend

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10425

___

### querySelector

▸ **querySelector**<`K`\>(`selectors`): ``null`` \| [`HTMLElementTagNameMap`](input._internal_.HTMLElementTagNameMap.md)[`K`]

Returns the first element that is a descendant of node that matches selectors.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`HTMLElementTagNameMap`](input._internal_.HTMLElementTagNameMap.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selectors` | `K` |

#### Returns

``null`` \| [`HTMLElementTagNameMap`](input._internal_.HTMLElementTagNameMap.md)[`K`]

#### Inherited from

SVGGraphicsElement.querySelector

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10427

▸ **querySelector**<`K`\>(`selectors`): ``null`` \| [`SVGElementTagNameMap`](input._internal_.SVGElementTagNameMap.md)[`K`]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`SVGElementTagNameMap`](input._internal_.SVGElementTagNameMap.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selectors` | `K` |

#### Returns

``null`` \| [`SVGElementTagNameMap`](input._internal_.SVGElementTagNameMap.md)[`K`]

#### Inherited from

SVGGraphicsElement.querySelector

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10428

▸ **querySelector**<`E`\>(`selectors`): ``null`` \| `E`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends [`Element`](../modules/input._internal_.md#element) = [`Element`](../modules/input._internal_.md#element) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selectors` | `string` |

#### Returns

``null`` \| `E`

#### Inherited from

SVGGraphicsElement.querySelector

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10429

___

### querySelectorAll

▸ **querySelectorAll**<`K`\>(`selectors`): [`NodeListOf`](input._internal_.NodeListOf.md)<[`HTMLElementTagNameMap`](input._internal_.HTMLElementTagNameMap.md)[`K`]\>

Returns all element descendants of node that match selectors.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`HTMLElementTagNameMap`](input._internal_.HTMLElementTagNameMap.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selectors` | `K` |

#### Returns

[`NodeListOf`](input._internal_.NodeListOf.md)<[`HTMLElementTagNameMap`](input._internal_.HTMLElementTagNameMap.md)[`K`]\>

#### Inherited from

SVGGraphicsElement.querySelectorAll

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10431

▸ **querySelectorAll**<`K`\>(`selectors`): [`NodeListOf`](input._internal_.NodeListOf.md)<[`SVGElementTagNameMap`](input._internal_.SVGElementTagNameMap.md)[`K`]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`SVGElementTagNameMap`](input._internal_.SVGElementTagNameMap.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selectors` | `K` |

#### Returns

[`NodeListOf`](input._internal_.NodeListOf.md)<[`SVGElementTagNameMap`](input._internal_.SVGElementTagNameMap.md)[`K`]\>

#### Inherited from

SVGGraphicsElement.querySelectorAll

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10432

▸ **querySelectorAll**<`E`\>(`selectors`): [`NodeListOf`](input._internal_.NodeListOf.md)<`E`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends [`Element`](../modules/input._internal_.md#element) = [`Element`](../modules/input._internal_.md#element) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selectors` | `string` |

#### Returns

[`NodeListOf`](input._internal_.NodeListOf.md)<`E`\>

#### Inherited from

SVGGraphicsElement.querySelectorAll

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10433

___

### releasePointerCapture

▸ **releasePointerCapture**(`pointerId`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pointerId` | `number` |

#### Returns

`void`

#### Inherited from

SVGGraphicsElement.releasePointerCapture

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4920

___

### remove

▸ **remove**(): `void`

Removes node.

#### Returns

`void`

#### Inherited from

SVGGraphicsElement.remove

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3582

___

### removeAttribute

▸ **removeAttribute**(`qualifiedName`): `void`

Removes element's first attribute whose qualified name is qualifiedName.

#### Parameters

| Name | Type |
| :------ | :------ |
| `qualifiedName` | `string` |

#### Returns

`void`

#### Inherited from

SVGGraphicsElement.removeAttribute

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4922

___

### removeAttributeNS

▸ **removeAttributeNS**(`namespace`, `localName`): `void`

Removes element's attribute whose namespace is namespace and local name is localName.

#### Parameters

| Name | Type |
| :------ | :------ |
| `namespace` | ``null`` \| `string` |
| `localName` | `string` |

#### Returns

`void`

#### Inherited from

SVGGraphicsElement.removeAttributeNS

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4924

___

### removeAttributeNode

▸ **removeAttributeNode**(`attr`): [`Attr`](../modules/input._internal_.md#attr)

#### Parameters

| Name | Type |
| :------ | :------ |
| `attr` | [`Attr`](../modules/input._internal_.md#attr) |

#### Returns

[`Attr`](../modules/input._internal_.md#attr)

#### Inherited from

SVGGraphicsElement.removeAttributeNode

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4925

___

### removeChild

▸ **removeChild**<`T`\>(`child`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Node`](../modules/input._internal_.md#node) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `child` | `T` |

#### Returns

`T`

#### Inherited from

SVGGraphicsElement.removeChild

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10087

___

### removeEventListener

▸ **removeEventListener**<`K`\>(`type`, `listener`, `options?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`SVGSVGElementEventMap`](input._internal_.SVGSVGElementEventMap.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`this`: [`SVGSVGElement`](../modules/input._internal_.md#svgsvgelement), `ev`: [`SVGSVGElementEventMap`](input._internal_.SVGSVGElementEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`EventListenerOptions`](input._internal_.EventListenerOptions.md) |

#### Returns

`void`

#### Overrides

[WindowEventHandlers](input._internal_.WindowEventHandlers.md).[removeEventListener](input._internal_.WindowEventHandlers.md#removeeventlistener)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13021

▸ **removeEventListener**(`type`, `listener`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `listener` | [`EventListenerOrEventListenerObject`](../modules/input._internal_.md#eventlisteneroreventlistenerobject) |
| `options?` | `boolean` \| [`EventListenerOptions`](input._internal_.EventListenerOptions.md) |

#### Returns

`void`

#### Overrides

[WindowEventHandlers](input._internal_.WindowEventHandlers.md).[removeEventListener](input._internal_.WindowEventHandlers.md#removeeventlistener)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13022

___

### replaceChild

▸ **replaceChild**<`T`\>(`node`, `child`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Node`](../modules/input._internal_.md#node) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | [`Node`](../modules/input._internal_.md#node) |
| `child` | `T` |

#### Returns

`T`

#### Inherited from

SVGGraphicsElement.replaceChild

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10088

___

### replaceChildren

▸ **replaceChildren**(...`nodes`): `void`

Replace all children of node with nodes, while replacing strings in nodes with equivalent Text nodes.

Throws a "HierarchyRequestError" DOMException if the constraints of the node tree are violated.

#### Parameters

| Name | Type |
| :------ | :------ |
| `...nodes` | (`string` \| [`Node`](../modules/input._internal_.md#node))[] |

#### Returns

`void`

#### Inherited from

SVGGraphicsElement.replaceChildren

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10439

___

### replaceWith

▸ **replaceWith**(...`nodes`): `void`

Replaces node with nodes, while replacing strings in nodes with equivalent Text nodes.

Throws a "HierarchyRequestError" DOMException if the constraints of the node tree are violated.

#### Parameters

| Name | Type |
| :------ | :------ |
| `...nodes` | (`string` \| [`Node`](../modules/input._internal_.md#node))[] |

#### Returns

`void`

#### Inherited from

SVGGraphicsElement.replaceWith

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3588

___

### requestFullscreen

▸ **requestFullscreen**(`options?`): `Promise`<`void`\>

Displays element fullscreen and resolves promise when done.

When supplied, options's navigationUI member indicates whether showing navigation UI while in fullscreen is preferred or not. If set to "show", navigation simplicity is preferred over screen space, and if set to "hide", more screen space is preferred. User agents are always free to honor user preference over the application's. The default value "auto" indicates no application preference.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`FullscreenOptions`](input._internal_.FullscreenOptions.md) |

#### Returns

`Promise`<`void`\>

#### Inherited from

SVGGraphicsElement.requestFullscreen

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4931

___

### requestPointerLock

▸ **requestPointerLock**(): `void`

#### Returns

`void`

#### Inherited from

SVGGraphicsElement.requestPointerLock

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4932

___

### scroll

▸ **scroll**(`options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`ScrollToOptions`](input._internal_.ScrollToOptions.md) |

#### Returns

`void`

#### Inherited from

SVGGraphicsElement.scroll

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4933

▸ **scroll**(`x`, `y`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |

#### Returns

`void`

#### Inherited from

SVGGraphicsElement.scroll

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4934

___

### scrollBy

▸ **scrollBy**(`options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`ScrollToOptions`](input._internal_.ScrollToOptions.md) |

#### Returns

`void`

#### Inherited from

SVGGraphicsElement.scrollBy

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4935

▸ **scrollBy**(`x`, `y`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |

#### Returns

`void`

#### Inherited from

SVGGraphicsElement.scrollBy

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4936

___

### scrollIntoView

▸ **scrollIntoView**(`arg?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg?` | `boolean` \| [`ScrollIntoViewOptions`](input._internal_.ScrollIntoViewOptions.md) |

#### Returns

`void`

#### Inherited from

SVGGraphicsElement.scrollIntoView

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4937

___

### scrollTo

▸ **scrollTo**(`options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`ScrollToOptions`](input._internal_.ScrollToOptions.md) |

#### Returns

`void`

#### Inherited from

SVGGraphicsElement.scrollTo

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4938

▸ **scrollTo**(`x`, `y`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |

#### Returns

`void`

#### Inherited from

SVGGraphicsElement.scrollTo

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4939

___

### setAttribute

▸ **setAttribute**(`qualifiedName`, `value`): `void`

Sets the value of element's first attribute whose qualified name is qualifiedName to value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `qualifiedName` | `string` |
| `value` | `string` |

#### Returns

`void`

#### Inherited from

SVGGraphicsElement.setAttribute

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4941

___

### setAttributeNS

▸ **setAttributeNS**(`namespace`, `qualifiedName`, `value`): `void`

Sets the value of element's attribute whose namespace is namespace and local name is localName to value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `namespace` | ``null`` \| `string` |
| `qualifiedName` | `string` |
| `value` | `string` |

#### Returns

`void`

#### Inherited from

SVGGraphicsElement.setAttributeNS

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4943

___

### setAttributeNode

▸ **setAttributeNode**(`attr`): ``null`` \| [`Attr`](../modules/input._internal_.md#attr)

#### Parameters

| Name | Type |
| :------ | :------ |
| `attr` | [`Attr`](../modules/input._internal_.md#attr) |

#### Returns

``null`` \| [`Attr`](../modules/input._internal_.md#attr)

#### Inherited from

SVGGraphicsElement.setAttributeNode

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4944

___

### setAttributeNodeNS

▸ **setAttributeNodeNS**(`attr`): ``null`` \| [`Attr`](../modules/input._internal_.md#attr)

#### Parameters

| Name | Type |
| :------ | :------ |
| `attr` | [`Attr`](../modules/input._internal_.md#attr) |

#### Returns

``null`` \| [`Attr`](../modules/input._internal_.md#attr)

#### Inherited from

SVGGraphicsElement.setAttributeNodeNS

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4945

___

### setCurrentTime

▸ **setCurrentTime**(`seconds`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `seconds` | `number` |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13011

___

### setPointerCapture

▸ **setPointerCapture**(`pointerId`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pointerId` | `number` |

#### Returns

`void`

#### Inherited from

SVGGraphicsElement.setPointerCapture

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4946

___

### suspendRedraw

▸ **suspendRedraw**(`maxWaitMilliseconds`): `number`

**`deprecated`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `maxWaitMilliseconds` | `number` |

#### Returns

`number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13013

___

### toggleAttribute

▸ **toggleAttribute**(`qualifiedName`, `force?`): `boolean`

If force is not given, "toggles" qualifiedName, removing it if it is present and adding it if it is not present. If force is true, adds qualifiedName. If force is false, removes qualifiedName.

Returns true if qualifiedName is now present, and false otherwise.

#### Parameters

| Name | Type |
| :------ | :------ |
| `qualifiedName` | `string` |
| `force?` | `boolean` |

#### Returns

`boolean`

#### Inherited from

SVGGraphicsElement.toggleAttribute

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4952

___

### unpauseAnimations

▸ **unpauseAnimations**(): `void`

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13014

___

### unsuspendRedraw

▸ **unsuspendRedraw**(`suspendHandleID`): `void`

**`deprecated`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `suspendHandleID` | `number` |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13016

___

### unsuspendRedrawAll

▸ **unsuspendRedrawAll**(): `void`

**`deprecated`**

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13018

___

### webkitMatchesSelector

▸ **webkitMatchesSelector**(`selectors`): `boolean`

**`deprecated`** This is a legacy alias of `matches`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `selectors` | `string` |

#### Returns

`boolean`

#### Inherited from

SVGGraphicsElement.webkitMatchesSelector

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4954
