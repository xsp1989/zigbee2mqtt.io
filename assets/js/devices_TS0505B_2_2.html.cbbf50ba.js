"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[48907],{58228:(o,e,t)=>{t.r(e),t.d(e,{comp:()=>d,data:()=>a});var u=t(24691);const i={},d=(0,t(88242).A)(i,[["render",function(o,e){const t=(0,u.g2)("RouteLink");return(0,u.uX)(),(0,u.CE)("div",null,[e[8]||(e[8]=(0,u.Lk)("h1",{id:"tuya-ts0505b-2-2",tabindex:"-1"},[(0,u.Lk)("a",{class:"header-anchor",href:"#tuya-ts0505b-2-2"},[(0,u.Lk)("span",null,"Tuya TS0505B_2_2")])],-1)),(0,u.Lk)("table",null,[e[6]||(e[6]=(0,u.Lk)("thead",null,[(0,u.Lk)("tr",null,[(0,u.Lk)("th"),(0,u.Lk)("th")])],-1)),(0,u.Lk)("tbody",null,[e[2]||(e[2]=(0,u.Lk)("tr",null,[(0,u.Lk)("td",null,"Model"),(0,u.Lk)("td",null,"TS0505B_2_2")],-1)),(0,u.Lk)("tr",null,[e[1]||(e[1]=(0,u.Lk)("td",null,"Vendor",-1)),(0,u.Lk)("td",null,[(0,u.bF)(t,{to:"/supported-devices/#v=Tuya"},{default:(0,u.k6)((()=>e[0]||(e[0]=[(0,u.eW)("Tuya")]))),_:1})])]),e[3]||(e[3]=(0,u.Lk)("tr",null,[(0,u.Lk)("td",null,"Description"),(0,u.Lk)("td",null,"Zigbee GU10/E14 5W smart bulb")],-1)),e[4]||(e[4]=(0,u.Lk)("tr",null,[(0,u.Lk)("td",null,"Exposes"),(0,u.Lk)("td",null,"light (state, brightness, color_temp, color_hs), do_not_disturb, linkquality")],-1)),e[5]||(e[5]=(0,u.Lk)("tr",null,[(0,u.Lk)("td",null,"Picture"),(0,u.Lk)("td",null,[(0,u.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/TS0505B_2_2.png",alt:"Tuya TS0505B_2_2"})])],-1))])]),e[9]||(e[9]=(0,u.Lk)("h2",{id:"options",tabindex:"-1"},[(0,u.Lk)("a",{class:"header-anchor",href:"#options"},[(0,u.Lk)("span",null,"Options")])],-1)),(0,u.Lk)("p",null,[(0,u.Lk)("em",null,[(0,u.bF)(t,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,u.k6)((()=>e[7]||(e[7]=[(0,u.eW)("How to use device type specific configuration")]))),_:1})])]),e[10]||(e[10]=(0,u.Fv)('<ul><li><p><code>color_sync</code>: When enabled colors will be synced, e.g. if the light supports both color x/y and color temperature a conversion from color x/y to color temperature will be done when setting the x/y color (default true). The value must be <code>true</code> or <code>false</code></p></li><li><p><code>state_action</code>: State actions will also be published as &#39;action&#39; when true (default false). The value must be <code>true</code> or <code>false</code></p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="light" tabindex="-1"><a class="header-anchor" href="#light"><span>Light</span></a></h3><p>This light supports the following features: <code>state</code>, <code>brightness</code>, <code>color_temp</code>, <code>color_hs</code>.</p><ul><li><code>state</code>: To control the state publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;ON&quot;}</code>, <code>{&quot;state&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state&quot;: &quot;TOGGLE&quot;}</code>. To read the state send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state&quot;: &quot;&quot;}</code>.</li><li><code>brightness</code>: To control the brightness publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;brightness&quot;: VALUE}</code> where <code>VALUE</code> is a number between <code>0</code> and <code>254</code>. To read the brightness send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;brightness&quot;: &quot;&quot;}</code>.</li><li><code>color_temp</code>: To control the color temperature (in reciprocal megakelvin a.k.a. mired scale) publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;color_temp&quot;: VALUE}</code> where <code>VALUE</code> is a number between <code>143</code> and <code>500</code>, the higher the warmer the color. To read the color temperature send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;color_temp&quot;: &quot;&quot;}</code>. Besides the numeric values the following values are accepted: <code>coolest</code>, <code>cool</code>, <code>neutral</code>, <code>warm</code>, <code>warmest</code>.</li><li><code>color_hs</code>: To control the hue/saturation (color) publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;color&quot;: {&quot;hue&quot;: HUE, &quot;saturation&quot;: SATURATION}}</code> (e.g. <code>{&quot;color&quot;:{&quot;hue&quot;:360,&quot;saturation&quot;:100}}</code>). To read the hue/saturation send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;color&quot;:{&quot;hue&quot;:&quot;&quot;,&quot;saturation&quot;:&quot;&quot;}}</code>. Alternatively it is possible to set the hue/saturation via: <ul><li>HSB space (hue, saturation, brightness): <code>{&quot;color&quot;: {&quot;h&quot;: H, &quot;s&quot;: S, &quot;b&quot;: B}}</code> e.g. <code>{&quot;color&quot;:{&quot;h&quot;:360,&quot;s&quot;:100,&quot;b&quot;:100}}</code> or <code>{&quot;color&quot;: {&quot;hsb&quot;: &quot;H,S,B&quot;}}</code> e.g. <code>{&quot;color&quot;:{&quot;hsb&quot;:&quot;360,100,100&quot;}}</code></li><li>HSV space (hue, saturation, value):<code>{&quot;color&quot;: {&quot;h&quot;: H, &quot;s&quot;: S, &quot;v&quot;: V}}</code> e.g. <code>{&quot;color&quot;:{&quot;h&quot;:360,&quot;s&quot;:100,&quot;v&quot;:100}}</code> or <code>{&quot;color&quot;: {&quot;hsv&quot;: &quot;H,S,V&quot;}}</code> e.g. <code>{&quot;color&quot;:{&quot;hsv&quot;:&quot;360,100,100&quot;}}</code></li><li>HSL space (hue, saturation, lightness)<code>{&quot;color&quot;: {&quot;h&quot;: H, &quot;s&quot;: S, &quot;l&quot;: L}}</code> e.g. <code>{&quot;color&quot;:{&quot;h&quot;:360,&quot;s&quot;:100,&quot;l&quot;:100}}</code> or <code>{&quot;color&quot;: {&quot;hsl&quot;: &quot;H,S,L&quot;}}</code> e.g. <code>{&quot;color&quot;:{&quot;hsl&quot;:&quot;360,100,100&quot;}}</code></li></ul></li></ul><h4 id="on-with-timed-off" tabindex="-1"><a class="header-anchor" href="#on-with-timed-off"><span>On with timed off</span></a></h4><p>When setting the state to ON, it might be possible to specify an automatic shutoff after a certain amount of time. To do this add an additional property <code>on_time</code> to the payload which is the time in seconds the state should remain on. Additionally an <code>off_wait_time</code> property can be added to the payload to specify the cooldown time in seconds when the light will not answer to other on with timed off commands. Support depends on the light firmware. Some devices might require both <code>on_time</code> and <code>off_wait_time</code> to work Examples : <code>{&quot;state&quot; : &quot;ON&quot;, &quot;on_time&quot;: 300}</code>, <code>{&quot;state&quot; : &quot;ON&quot;, &quot;on_time&quot;: 300, &quot;off_wait_time&quot;: 120}</code>.</p><h4 id="transition" tabindex="-1"><a class="header-anchor" href="#transition"><span>Transition</span></a></h4><p>For all of the above mentioned features it is possible to do a transition of the value over time. To do this add an additional property <code>transition</code> to the payload which is the transition time in seconds. Examples: <code>{&quot;brightness&quot;:156,&quot;transition&quot;:3}</code>, <code>{&quot;color_temp&quot;:241,&quot;transition&quot;:1}</code>.</p><h3 id="do-not-disturb-binary" tabindex="-1"><a class="header-anchor" href="#do-not-disturb-binary"><span>Do not disturb (binary)</span></a></h3><p>Do not disturb mode, when enabled this function will keep the light OFF after a power outage. Value can be found in the published state on the <code>do_not_disturb</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;do_not_disturb&quot;: NEW_VALUE}</code>. If value equals <code>true</code> do not disturb is ON, if <code>false</code> OFF.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric"><span>Linkquality (numeric)</span></a></h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',13))])}]]),a=JSON.parse('{"path":"/devices/TS0505B_2_2.html","title":"Tuya TS0505B_2_2 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Tuya TS0505B_2_2 control via MQTT","description":"Integrate your Tuya TS0505B_2_2 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2023-12-26T18:38:16.000Z"},"headers":[{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Light","slug":"light","link":"#light","children":[]},{"level":3,"title":"Do not disturb (binary)","slug":"do-not-disturb-binary","link":"#do-not-disturb-binary","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1730948620000},"filePathRelative":"devices/TS0505B_2_2.md"}')}}]);