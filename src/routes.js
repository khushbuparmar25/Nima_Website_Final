import React from 'react'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import mbs from "./mbs/mbs.js";
import contactus from "./contactus/contact.js";
import covid from "./covid/covid.js";
import stateofficebariars from "./stateofficebariars/stateofficebariars.js";
import womensforum from "./womensforum/womensforum.js";
import elections from "./elections/elections.js";
import desk from "./Desk/Desk.js";
import BranchNews from "./BranchNews/BranchNews.js";
import CentralNews from "./CentralNews/CentralNews.js";
import History from "./history/History/History.js";
import gallery from "./gallery/gallery.js";
import aboutus from "./aboutus/aboutus.js";
import life from "./life/life.js";
import studentsforum from "./studentsforum/studentsforum.js";
import objectives from "./objectives/Objectives/Objective.js";
import download from "./downloads/download.js";
import Folders from './gallery/Components/Folders.js';
import Grid from "./gallery/Components/Grid.js";


const routes = () => {
    return (
        <Router>
            <Switch>
                <Route path="/mbs" component={mbs} exact />
                <Route path="/contactus" component={contactus} exact />
                <Route path="/covid" component={covid} exact />
                <Route path="/stateofficebariars" component={stateofficebariars} exact />
                <Route path="/womensforum" component={womensforum} exact />
                <Route path="/elections" component={elections} exact />
                <Route path="/desk" component={desk} exact />
                <Route path="/branchnews" component={BranchNews} exact />
                <Route path="/centralnews" component={CentralNews} exact />
                <Route path="/history" component={History} exact />
                <Route path="/gallery" component={gallery} exact /> 
                <Route path="/aboutus" component={aboutus} exact />
                <Route path="/life" component={life} exact />
                <Route path="/studentsforum" component={studentsforum} exact />
                <Route path="/upcloud-nima-gallery" component={Folders} exact />
                <Route path="/allimages" component={Grid} exact />
                <Route path="/objectives" component={objectives} exact />
                <Route path="/download" component={download} exact />
            </Switch>
        </Router>
    )
}

export default routes
