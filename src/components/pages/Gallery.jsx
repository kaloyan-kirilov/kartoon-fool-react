import { art, set } from "./gallery/Artwork.js";
import { useState } from "react";

function Gallery() {

    const page_1 = {
        number: 1,
        array: set.page_1,
        first: true,
        last: false,
        prev: null,
        next: () => {setPage(page_2)}
    };

    const page_2 = {
        number: 2,
        array: set.page_2,
        first: false,
        last: false,
        prev: () => {setPage(page_1)},
        next: () => {setPage(page_3)}
    };

    const page_3 = {
        number: 3,
        array: set.page_3,
        first: false,
        last: false,
        prev: () => {setPage(page_2)},
        next: () => {setPage(page_4)}
    };

    const page_4 = {
        number: 4,
        array: set.page_4,
        first: false,
        last: false,
        prev: () => {setPage(page_3)},
        next: () => {setPage(page_5)}
    };

    const page_5 = {
        number: 5,
        array: set.page_5,
        first: false,
        last: false,
        prev: () => {setPage(page_4)},
        next: () => {setPage(page_6)}
    };

    const page_6 = {
        number: 6,
        array: set.page_6,
        first: false,
        last: true,
        prev: () => {setPage(page_5)},
        next: null
    };

    const [page, setPage] = useState(page_1);

    let i = page.array;

    const [modal, setModal] = useState(false);
    const [index, setIndex] = useState(null);
    const [title, setTitle] = useState(null);
    const [image, setImage] = useState(null);

    function load_thumb(thumb) {
        let thumbnail = thumb;

        if (thumbnail != null) {
            thumbnail = `url('/kartoon-fool-react/assets/${thumb})`;
        }

        return thumbnail;
    }

    function load_modal(img, name) {
        const index = art.findIndex(function (image) {
            return image.title == name;
        });        

        const title = name;
        const image = `url('/kartoon-fool-react/assets/${img})`;

        setIndex(index);
        setTitle(title);
        setImage(image);

        onkeydown = function(event) {
            if (event.key == "ArrowLeft" && index >= 2) {
                prev_modal(index);
            }

            if (event.key == "ArrowRight" && index <= art.length - 2) {
                next_modal(index);
            }

            if (event.key == "Escape") {
                setModal(false);
                this.onkeydown = null;
            }
        }
    }

    function prev_modal(i) {
        load_modal(art[i-1].full, art[i-1].title);
    }

    function next_modal(i) {
        load_modal(art[i+1].full, art[i+1].title);
    }

    return(
        <>
            <div className="page-title">
                <p className="title-text">Gallery</p>
            </div>
            <div id="gallery">
                    <div id="thumb-1" style={{backgroundImage: load_thumb(art[i[1]].thumb)}} onClick={() => {load_modal(art[i[1]].full, art[i[1]].title), i[1] == 0 ? "" : setModal(true)}} className={`thumbnail ${i[1] == 0 ? "empty-thumb" : ""}`}></div>
                    <div id="thumb-2" style={{backgroundImage: load_thumb(art[i[2]].thumb)}} onClick={() => {load_modal(art[i[2]].full, art[i[2]].title), i[2] == 0 ? "" : setModal(true)}} className={`thumbnail ${i[2] == 0 ? "empty-thumb" : ""}`}></div>
                    <div id="thumb-3" style={{backgroundImage: load_thumb(art[i[3]].thumb)}} onClick={() => {load_modal(art[i[3]].full, art[i[3]].title), i[3] == 0 ? "" : setModal(true)}} className={`thumbnail ${i[3] == 0 ? "empty-thumb" : ""}`}></div>
                    <div id="thumb-4" style={{backgroundImage: load_thumb(art[i[4]].thumb)}} onClick={() => {load_modal(art[i[4]].full, art[i[4]].title), i[4] == 0 ? "" : setModal(true)}} className={`thumbnail ${i[4] == 0 ? "empty-thumb" : ""}`}></div>
                    <div id="thumb-5" style={{backgroundImage: load_thumb(art[i[5]].thumb)}} onClick={() => {load_modal(art[i[5]].full, art[i[5]].title), i[5] == 0 ? "" : setModal(true)}} className={`thumbnail ${i[5] == 0 ? "empty-thumb" : ""}`}></div>
                    <div id="thumb-6" style={{backgroundImage: load_thumb(art[i[6]].thumb)}} onClick={() => {load_modal(art[i[6]].full, art[i[6]].title), i[6] == 0 ? "" : setModal(true)}} className={`thumbnail ${i[6] == 0 ? "empty-thumb" : ""}`}></div>
                    <div id="thumb-7" style={{backgroundImage: load_thumb(art[i[7]].thumb)}} onClick={() => {load_modal(art[i[7]].full, art[i[7]].title), i[7] == 0 ? "" : setModal(true)}} className={`thumbnail ${i[7] == 0 ? "empty-thumb" : ""}`}></div>
                    <div id="thumb-8" style={{backgroundImage: load_thumb(art[i[8]].thumb)}} onClick={() => {load_modal(art[i[8]].full, art[i[8]].title), i[8] == 0 ? "" : setModal(true)}} className={`thumbnail ${i[8] == 0 ? "empty-thumb" : ""}`}></div>
                <div id="page-navigation">
                    <div id="prev-button" onClick={()=> {page.prev()}} className={`arrow-btn ${page.first == true ? "hide-button" : ""}`}></div>
                    <div id="page-1" onClick={() => {setPage(page_1)}} className={`page-btn ${page.number == 1 ? "current-page" : ""}`}>1</div>
                    <div id="page-2" onClick={() => {setPage(page_2)}} className={`page-btn ${page.number == 2 ? "current-page" : ""}`}>2</div>
                    <div id="page-3" onClick={() => {setPage(page_3)}} className={`page-btn ${page.number == 3 ? "current-page" : ""}`}>3</div>
                    <div id="page-4" onClick={() => {setPage(page_4)}} className={`page-btn ${page.number == 4 ? "current-page" : ""}`}>4</div>
                    <div id="page-5" onClick={() => {setPage(page_5)}} className={`page-btn ${page.number == 5 ? "current-page" : ""}`}>5</div>
                    <div id="page-6" onClick={() => {setPage(page_6)}} className={`page-btn ${page.number == 6 ? "current-page" : ""}`}>6</div>
                    <div id="next-button" onClick={()=> {page.next()}} className={`arrow-btn ${page.last == true ? "hide-button" : ""}`}></div>
                </div>
                <div id="mobile-nav">
                    <div id="prev-button-m" onClick={()=> {page.prev()}} className={`arrow-btn ${page.first == true ? "hide-button" : ""}`}></div>
                    <div id="page-index" className="page-btn current-page">{page.number}</div>
                    <div id="next-button-m" onClick={()=> {page.next()}} className={`arrow-btn ${page.last == true ? "hide-button" : ""}`}></div>
                </div>
                {modal &&
                <div id="gallery-modal">
                    <div id="modal-container">
                        <div id="modal-top">
                            <p id="title-top">{title}</p>
                            <div id="close-button" onClick={() => {setModal(false), onkeydown = null;}}></div>
                        </div>
                        <div id="modal-image" style={{backgroundImage: image}}></div>
                        <div id="modal-nav">
                            <div id="prev-modal" onClick={() => {prev_modal(index)}} className={`modal-arrow ${index == 1 ? "hide-button" : ""}`}></div>
                            <p id="title-nav">{title}</p>
                            <div id="modal-index">{index}</div>
                            <div id="next-modal" onClick={() => {next_modal(index)}} className={`modal-arrow ${index == art.length - 1 ? "hide-button" : ""}`}></div>
                        </div>
                    </div>
                </div>}
            </div>
        </>
    );
}

export default Gallery;