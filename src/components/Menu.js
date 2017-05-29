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
          <p>La mappatura indica gli indirizzi dove hanno vissuto o lavorato alcune donne del '900, a Torino.</p><p>Vorremmo completare le storie mancanti, se hai informazioni scrivici a <a href="mailto:info@freeda.it">info@freeda.it</a>!</p>
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
              - <a href="http://pietre.museodiffusotorino.it">Museo Diffuso Torino</a><br/>
              - "Donne piemontesi nella lotta di liberazione: 99 partigiane cadute, 185 deportate, 38 cadute civili", Commissione femminile dell’ANPI provinciale, Torino, 1953<br/>
              - <a href="http://www.ladonnasarda.it/magazine/chi-siamo/6341/la-suora-sarda-che-a-torino-sfido-i-nazisti.html">"La suora sarda che a Torino sfidò i nazisti", La Donna Sarda</a><br/>
              - <a href="https://cittaamisuradidonna.wordpress.com/2017/05/12/felicita-ferrero-1899-1984/">"Felicita Ferrero", Città a misura di donna, blog</a><br/>
              - "Per via invisibile", A. Cavaglion, il Mulino, Bologna 1998<br/>
              - Wikipedia<br/>
              - <a href="https://cittaamisuradidonna.wordpress.com/2017/04/22/rita-levi-montalcini-1909-2012/">"Rita Levi Montalcini", Città a misura di donna, blog</a><br/>
              - <a href="http://www.museotorino.it/view/s/8b80ebdc938d4dfdb862a4b3ce0c024a">Museo Torino</a><br/>
              - <a href="http://www.testimonianzedailager.rai.it/testimoni/pdf/test_30dati.pdf">"Testimonianze dai lager", Rai</a><br/>
              - "Donne a Torino nel Novecento", M. Filippa, Edizioni del Capricorno, Torino, 2017<br/>
              - <a href="www.150anni.it">"Maria Rubiolo", Oddone Camerana</a><br/>
              - "La Manifattura Tabacchi e il suo borgo. 1860-1945", L. Angeli, A. Castrovilli, C. Seminara, Associazione culturale Officina della Memoria, Torino, 1999<br/>
              - "Orchestre e cafés chantants. Dal maestro Angelini a Fred Buscaglione.", M. Filippa, Sellino Editore, Milano, 1994<br/>
              - "Torino '900. La città delle fabbriche." E. Miletto, D. Sasso, Edizioni del Capricorno, Torino, 2015<br/>
              - <a href="http://intranet.istoreto.it/partigianato/default.asp">Istituto Piemontese per la Storia della Resistenza e della Società Contemporanea</a>
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
