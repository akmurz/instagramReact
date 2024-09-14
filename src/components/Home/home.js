import Logo from "../../icons/LOGO.png";
import search from "../../icons/search.png";
import home from "../../icons/home-active.png";
import msg from "../../icons/msg.png";
import add from "../../icons/add.png";
import trends from "../../icons/trends.png";
import likes from "../../icons/likes.png";
import ellipse from "../../icons/Ellipse 1.png";
import arrow from "../../icons/Arrow 1.png";
import "./home.css";
import { useState } from "react";
import Modal from "react-modal";
import options from "../../icons/options.png";
import share from "../../icons/share.png";
import comments from "../../icons/comments.png";
import save from "../../icons/save.png";
import emojis from "../../icons/emojis.png";
import Dropdown from "react-bootstrap/Dropdown";
// import DropdownButton from "react-bootstrap/DropdownButton";

Modal.setAppElement("#root");

export function Home() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [secondModalIsOpen, setSecondModalIsOpen] = useState(false);
  const [file, setFile] = useState(null);
  const [description, setDescription] = useState("");
  const [posts, setPosts] = useState([]);
  const [like, setLike] = useState(0);

  const openModal = () => {
    setModalIsOpen(true);
    setSecondModalIsOpen(false);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const openSecondModal = () => {
    setModalIsOpen(false);
    setSecondModalIsOpen(true);
  };

  const closeSecondModal = () => {
    setSecondModalIsOpen(false);
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
    openSecondModal();
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleShare = () => {
    if (file) {
      const newPost = {
        id: Date.now(),
        image: URL.createObjectURL(file),
        description,
      };
      setPosts([newPost, ...posts]);
      closeSecondModal();
    }
  };

  const handleDelete = (id) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  const plusLike = () => {
    setLike(like + 1);
  };

  const Upload = () => (
    <label className="add_file">
      <div className="choose_file">Выбрать на компьютере</div>
      <input type="file" className="input" onChange={handleFileChange} />
    </label>
  );

  const firstModalContent = (
    <div className="modal-content">
      <div className="modal-header">
        <div className="create">Создание публикации</div>
        <button onClick={openSecondModal} className="next">
          Далее
        </button>
      </div>
      <div className="modal-body">
        <div className="text">Перетащите сюда фото и видео</div>
        {Upload()}
      </div>
    </div>
  );

  const secondModalContent = (
    <div className="modal-content-2">
      <div className="modal-header-2">
        <img src={arrow} onClick={openModal} className="arrow" alt="arrow" />
        <div className="create-2">Создание публикации</div>
        <button onClick={handleShare} className="post">
          Поделиться
        </button>
      </div>
      <div className="modal-body-2">
        {file && (
          <div className="preview">
            <img
              src={URL.createObjectURL(file)}
              alt="Preview"
              className="preview-img"
            />
          </div>
        )}
        <textarea
          value={description}
          onChange={handleDescriptionChange}
          placeholder="Добавить подпись"
          className="description"
        />
      </div>
    </div>
  );

  const blockSuggestion = (
    <div className="block-suggestion">
      <div className="ellipse-sug">
        <img src={ellipse} className="ellipse-sug" />
      </div>
      <div className="acc-name">
        <div>Akmurza</div>
        <div>Suggestion for you</div>
      </div>
      <div>Follow</div>
    </div>
  );
  return (
    <>
      <header>
        <img src={Logo} className="logo" alt="logo" />
        <img src={search} className="search" alt="search" />
        <img src={home} className="home" alt="home" />
        <img src={msg} className="msg" alt="msg" />
        <img src={add} className="add" onClick={openModal} alt="add" />
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          className="modal"
        >
          {firstModalContent}
        </Modal>
        <Modal
          isOpen={secondModalIsOpen}
          onRequestClose={closeSecondModal}
          className="modal"
        >
          {secondModalContent}
        </Modal>
        <img src={trends} className="trends" alt="trends" />
        <img src={likes} className="likes" alt="likes" />
        <img src={ellipse} className="ellipse" alt="ellipse" />
      </header>
      <div className="block-main">
        <main>
          {posts.map((post) => (
            <div key={post.id} className="post-item">
              {console.log(post)}
              <div className="avatar">
                <img src={ellipse} className="ellipse-2" />
                Akmurza
                <Dropdown align="end">
                  <Dropdown.Toggle as="span" className="options-toggle">
                    <img src={options} className="options" alt="options" />
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item bsPrefix="edit">
                      <div className="edit-div">Edit</div>
                    </Dropdown.Item>
                    <Dropdown.Item
                      bsPrefix="delete"
                      onClick={() => handleDelete(post.id)}
                    >
                      <div className="delete-div">Delete</div>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              <img src={post.image} alt="Post" className="post-image" />
              <div className="post-description">
                <div className="like-comm">
                  <img src={likes} className="like" onClick={plusLike} />
                  <img src={comments} className="comm" />
                  <img src={share} className="share" />
                  <img src={save} className="save" />
                </div>
                <div className="sub-description">
                  <div className="likes-2">{like} likes</div>
                  <div className="description-2">
                    <div className="ava-name">
                      <span>Akmurza </span>
                      {post.description}
                    </div>
                  </div>
                  <div className="see-comm">See 99 comments</div>
                  <div className="time">5 HOURS AGO</div>
                </div>
                <div className="comments-block">
                  <div className="emojis">
                    <img src={emojis} />
                  </div>
                  <div className="add-comment">Add a comment...</div>
                  <div className="post-but">Post</div>
                </div>
              </div>
            </div>
          ))}
        </main>
        <aside>
          <div className="sidebar">
            <div className="block-1">
              <div className="sub-1-1">
                <img src={ellipse} className="ellipse-1" />
              </div>
              <div className="sub-1-2">
                <div>Akmurza</div>
                <div>Akmurza</div>
              </div>
              <div className="sub-1-3">Change</div>
            </div>
            <div className="block-sug">
              <div className="for-you">Suggestions for you </div>
              <div className="see">See all</div>
            </div>
            <div className="block-suggestion-father">
              {blockSuggestion}
              {blockSuggestion}
              {blockSuggestion}
              {blockSuggestion}
              {blockSuggestion}
            </div>
          </div>
        </aside>
      </div>
    </>
  );
}
