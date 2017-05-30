import React, { Component } from 'react';
import './Menu.css';

import {Collapse} from 'react-bootstrap';
import {FaFacebook, FaTwitter, FaInstagram, FaEnvelope} from 'react-icons/lib/fa';

class Menu extends Component {

  constructor(props) {
    super(props);

    this.state = {
      open: 0
    };
    this.openSection = this.openSection.bind(this);
  }

  openSection(num){
    if(this.state.open===num)
      this.setState({ open: 0});
    else
      this.setState({ open: num});
  }

  render() {
    return (
      <div className="Menu">
        <div className="content">
          <p>
            Questa mappa raccoglie gli indirizzi in cui hanno vissuto e/o lavorato molte delle <b>donne del ‘900 a Torino e provincia</b> e che, attraverso la loro vita, hanno preso parte attivamente all’<b>evoluzione del territorio, dell’economia e della storia di questi luoghi</b>.
          </p>
          <p>
            Abbiamo provato quindi a dare vita, virtualmente, ad una mappa capace di raccogliere le storie di tante donne con lo scopo di diffonderle: una grande banca dati open e di qualità, che stimolerà la <b>trasparenza, il coinvolgimento della comunità e la divulgazione del sapere</b>.
          </p>
          <p>
            Vorremmo completare le storie mancanti, se hai informazioni <b>scrivici a <a href="mailto:info@freeda.it">info@freeda.it</a>!</b>
          </p>
          <hr/>
          <h3><a href="#download" onClick={()=>{this.openSection(1)}}>Download Dati</a></h3>
          <Collapse in={this.state.open===1}>
            <div className="downloadSection">
              <a className="button" href={process.env.PUBLIC_URL+"/open/women.json"} download>JSON</a>
              <a className="button" href={process.env.PUBLIC_URL+"/open/women.csv"} download>CSV</a>
              <a className="button" href={process.env.PUBLIC_URL+"/open/women.xlsx"} download>XLSX</a>
              <a className="button" href={process.env.PUBLIC_URL+"/open/women.xml"} download>XML</a>
            </div>
          </Collapse>
          <h3><a href="#license" onClick={()=>{this.openSection(2)}}>Licenza</a></h3>
          <Collapse in={this.state.open===2}>
            <p><a href="https://creativecommons.org/licenses/by/3.0/it/">Attribuzione 3.0 Italia (CC BY 3.0 IT)</a></p>
          </Collapse>
          <h3><a href="#source" onClick={()=>{this.openSection(3)}}>Fonti</a></h3>
          <Collapse in={this.state.open===3}>
            <div id="source">
              <p><b>Libri</b></p>
              <ul>
                <li><a href="https://www.ibs.it/compagne-libro-bianca-guidetti-serra/e/9788806096137">"Compagne", Bianca Guidetti Serra, Einaudi, 1977</a></li>
                <li><a href="https://www.ibs.it/donne-a-torino-nel-novecento-libro-marcella-filippa/e/9788877073259">"Donne a Torino nel Novecento", M. Filippa, Edizioni del Capricorno, Torino, 2017</a></li>
                <li><a href="http://www.librinlinea.it/titolo/donne-piemontesi-nella-lotta-di-liberazi/VIA0045765">"Donne piemontesi nella lotta di liberazione: 99 partigiane cadute, 185 deportate, 38 cadute civili", Commissione femminile dell’ANPI provinciale, Torino, 1953</a></li>
                <li><a href="http://www.arpnet.it/offmem/libromanifattura/manifattura.html">"La Manifattura Tabacchi e il suo borgo. 1860-1945", L. Angeli, A. Castrovilli, C. Seminara, Associazione culturale Officina della Memoria, Torino, 1999</a></li>
                <li><a href="https://www.ibs.it/per-via-invisibile-libro-alberto-cavaglion/e/9788815066459">"Per via invisibile", A. Cavaglion, il Mulino, Bologna 1998</a></li>
                <li><a href="http://www.sbn.it/opacsbn/opaclib?db=solr_iccu&resultForward=opac/iccu/full.jsp&from=1&nentries=10&searchForm=opac/iccu/error.jsp&do_cmd=search_show_cmd&fname=none&item:1032:BID=IT%5CICCU%5CTO0%5C1468124">"Storia illustrata di Torino", V. Castronovo, Sellino Editore, Milano, 1994</a></li>
                <li><a href="https://www.ibs.it/torino-900-citta-delle-fabbriche-libro-enrico-miletto-donatella-sasso/e/9788877072689?gclid=CjwKEAjwsLTJBRCvibaW9bGLtUESJAC4wKw1WbePxqxRrkkA4Z8b7W11fCNe2fXsPsLwNHh1eTrVDRoCSwjw_wcB">"Torino '900. La città delle fabbriche." E. Miletto, D. Sasso, Edizioni del Capricorno, Torino, 2015</a></li>
                <li><a href="https://www.ibs.it/bambola-altre-creazioni-libro-elena-lenci/e/9788888245652">"Una bambola e altre creazioni" E. (Lenci) König Scavini, Neos Edizioni, 2008</a></li>
              </ul>

              <p><b>Archivi digitali</b></p>
              <ul>
                <li><a href="http://digital-library.cdec.it/cdec-web/">CDEC Digital Library</a></li>
                <li><a href="http://www.fondazionetorinomusei.it/it/opendata">Fondazione Torino Musei - Open Data</a></li>
                <li><a href="http://intranet.istoreto.it/partigianato/default.asp">Istituto Piemontese per la Storia della Resistenza e della Società Contemporanea</a></li>
                <li><a href="http://pietre.museodiffusotorino.it">Museo Diffuso Torino</a></li>
                <li><a href="http://www.museotorino.it/view/s/8b80ebdc938d4dfdb862a4b3ce0c024a">Museo Torino</a></li>
                <li><a href="http://it.wikipedia.org">Wikipedia</a></li>
              </ul>

              <p><b>Blog</b></p>
              <ul>
                <li><a href="https://cittaamisuradidonna.wordpress.com/">Città a misura di donna</a></li>
                <li><a href="www.150anni.it">"Maria Rubiolo", Oddone Camerana</a></li>
                <li><a href="http://www.ladonnasarda.it/magazine/chi-siamo/6341/la-suora-sarda-che-a-torino-sfido-i-nazisti.html">"La suora sarda che a Torino sfidò i nazisti", La Donna Sarda</a></li>
                <li><a href="http://www.testimonianzedailager.rai.it/testimoni/pdf/test_30dati.pdf">"Testimonianze dai lager", Rai</a></li>
              </ul>

            </div>
          </Collapse>
        </div>
        <div className="footer">
          <hr/>
          <p>
            a project by<br/>
            Freeda - feel free around<br/>
            <a href="http://www.facebook.com/freedafeelfreearound" title="Freeda Facebook Page" target="_blank" rel="noopener noreferrer"><FaFacebook/></a>
            <a href="http://www.twitter.com/freeda_project" title="Freeda Twitter Page" target="_blank" rel="noopener noreferrer"><FaTwitter/></a>
            <a href="http://www.instagram.com/freeda_hq/" title="Freeda Instagram Page" target="_blank" rel="noopener noreferrer"><FaInstagram/></a>
            <a href="mailto:info@freeda.it" title="Freeda Mail"><FaEnvelope/></a>
          </p>
        </div>
      </div>
    );
  }
}
export default Menu;
