import ReactMarkdown from 'react-markdown'
import React, { useState } from "react"
import Editor from "react-simple-code-editor"
import Prism, { highlight, languages } from "prismjs"
import "prismjs/components/prism-clike"
import "prismjs/components/prism-c"
import "prismjs/components/prism-cpp"
import "prismjs/components/prism-java"
import "prismjs/components/prism-python"
import "prismjs/themes/prism-dark.css"
import { useForm } from 'react-hook-form'
import NewWindow from 'react-new-window'
import { Card, Button, Input, Question, Select } from 'shared/ui'

const Problem = () => {
    const {
        register,
    } = useForm()

    const [showCodeArea, setShowCodeArea] = useState(false)


    const content = `
# Et herbae ventis resupinum aprum

## Arbor tenebris Athin

Lorem markdownum solvo creberrima flamma videretur locus. Nocuere prensoque
haec: induit: quidem quae removerat nobis neque fessa humi. Corpore iube parvo
scire, *sanguineis* pervenit ab colla: *cum*, est par medios, ornat manet
nostraque nescio. Felicia pede in *ille* decoro fugit ille, natas coniunx
notatum gerebant ante? Ut in bellum, crescit, nova errat quae succiduo rugosoque
in corpora oranti fidem; ante.

- Debere illa vesti
- Pede nocte formidine Saturnia primum sustinuit sed
- Inde proditus Veneris pinnis fulmineis saturos dignam
- Est patris caloris
- In igni radiorum quaerens

## In formidine ferunt

Vertice tanta! Auras o nulla exspectat tum doctas herba falsi Bellona dum
dolorque Helicon saepe ecce. *Gente* animosa terra, herculis talia demissaque,
contrahitur matris vestras rector lacrimoso copia.

## Vites inventum gerebat

Rauco singula permiscuit illas quantaque, pugnae aquas animosa **mortali**,
licet! Aguntur prius, cratere: Tereusque delicta fores totidem: sede ad ardent
frementi curvataque morientis vero.

Strictis patrios, nocent ut tales custodia fuerat invisumque sanguine *medii
ardua agat* ut pectore magistris adhuc, inpius, Colchis. Silvae que atque, deus
aut suarum habebat metum. **Tota** ille reverti; At non quod edax dixit silvas
audiat creati. Iam dedi obscura liber frenisque magico ego somnus conubia
inexperrectus.

## Est stetit caecoque praecordia nescit vivere opus

Ut corruit sanguine mihi inmunis! Metaque cuius poscebatur in novem adurat,
recepto o violasse, nulloque, Martius caelestes. Sorores ut **Dianae ursaeque**:
ille num; per obmutuit poenas Taenarius saxa.

## Ipsa tactus duabus si tota pariter erat

Piget nepotis [concordia nisi cera](http://veniam.io/dolosae-cineres.html) iram
signa [videns](http://satistrachinia.io/habet), Quo in sordidus morando hunc. Et
fert verbere petit [non geminas](http://retinens.io/semper-siccare), tramite
Atlantis thalamis conplexus *currus*.

    var mirror_wheel = telecommunications_soa_font.typeHostInstall(rtf.kbps(5,
            telecommunicationsMetafile, -4), terabyte_basic_dcim, 4 +
            kerningBarKde) + key;
    if (gif_click_multithreading) {
        bootSoap = video;
        zettabyteDotMemory.systemDayHoneypot *= storage(ics);
        view.asp(sdkXslt, client_copy_touchscreen, wysiwyg);
    }
    commerce_bar = meta(minisiteVeronica(services_printer),
            orientationDesktopMetal, cellFileCdma);
    if (faqTargetCompact == snippet_domain(basic_trojan, bug_play_readme,
            externalMinisiteBandwidth)) {
        input.zipRestoreVirtualization.computer(846034, -5 + desktopPpcSearch,
                flashBiometrics(3, ultra));
    } else {
        scan_load_e = -4;
    }
    troubleshooting += title_rw;

In iter prosunt sed quarum aut, *ter spatio* gentes teneri face traiecit
insopitumque quas et loca vitatumque duxit. Hoc Achilles mente Sibyllae adde.
Quid fuit vulgasse umeris Phrygiae sublime manus, est tandem. Sui est, quae inde
iste et regno postes; et si et et oculisque *nec ait*. **Fluidos sic noctis**
suis quoque utque spectare adest, lacrimae.
    `
    return (
        <div>
        <Card title="Problem Title #001">
        <div className="flex w-full mb-2 gap-x-4">
        <span className={"text-primary-3 text-sm capitalize"}>Underway...</span>
        <span className={"text-white text-sm capitalize"}>Easy</span>
        <span className={"ml-auto mr-0 text-primary-4 text-sm"}>250 XP</span>
        </div>
        <p className="text-justify text-base mb-3">Type of the problem is what shows under the problem title in problemset page, not collapsible.</p>
        <p className="text-justify text-base mb-10">Short description is an introduction to the problem, it is shown in the collapsible part of the problem card in problemset page.</p>
        <div className="mb-20 markdown text-sm">
        <ReactMarkdown>
        {content}
        </ReactMarkdown>
        <Button onClick={() => setShowCodeArea(true)} className="block float-right mt-10" contained>Submit Your Solution</Button>
        </div>
        </Card>
        <Card title="">
            <h1 className="text-xl">Clarifications</h1>
            <br/>
            <div className="flex">
            <div className="mr-1" style={{width: "95%"}}>
            <Input 
                name="your-question"
                placeholder="ask-here"
                register={register}
            />
            </div>
            <Button className="block float-right mt-9" contained>
                <i className="fas fa-paper-plane"></i>
            </Button>
            </div>
            <Question question="Why 1+1=1?" answer="have some logic man!!"/>
            <Question question="Didnt get challenge 2" answer="read it again, wtf"/>
            <Question question="what is acm?"/>
        </Card>
        { showCodeArea ? <Window relatedtoshowcodearea={setShowCodeArea}/> : null }
        </div>
    )
}

const Window = ({ relatedtoshowcodearea }) => {
    const [code, setCode] = React.useState(
        `//your-code-here`
    )

    const {
        register,
    } = useForm()

    const [lang, setLang] = React.useState('cpp')
    const [fontSize, setFontSize] = React.useState(12)

    React.useEffect(()=>{
        console.log(lang)
    },[lang])
    
    return (
    <NewWindow onUnload={() => relatedtoshowcodearea(false)}>
    <div className="bg-dark-2 text-white top-0 fixed h-14 w-full">
    <div className="w-4/5 flex float-left text-white -mt-1">
    <select
        name="code-language"
        onChange={e=>setLang(e.target.value)}
        className="w-20 appearance-none p-3 rounded-2xl mr-1 ml-1 mt-2 bg-dark-3 mb-5 focus:outline-none cursor-pointer"
        style={{fontFamily: "Font Awesome 5 Brands"}}
      >
          <option value="cpp">
              C++
            </option>
          <option value="c">
              C
           </option>
          <option value="java">
              Java
        </option>
      </select>
    <Button onClick={()=>setFontSize(fontSize+1 < 28 ? fontSize+1 : 28)} contained className="mt-3 mr-1"><i className="fas fa-search-plus"></i></Button>
    <Button onClick={()=>setFontSize(fontSize-1 > 8 ? fontSize-1 : 8)} contained className="mt-3"><i className="fas fa-search-minus"></i></Button>
    </div>
    <div className="w-1/5 flex float-right">
    <Button className="block float-right mt-2 mr-2 ml-auto" type="submit" contained>Submit</Button>
    </div>
    </div>
    <Editor
    className="mt-14 min-h-full	 text-white bg-dark-3"
      value={code}
      onValueChange={(code) => setCode(code)}
      highlight={(code) => highlight(code, languages[lang])}
      padding={10}
      style={{
        fontFamily: '"Fira code", "Fira Mono", monospace',
        fontSize: fontSize,
      }}
    />
  </NewWindow>
    )
}

export default Problem