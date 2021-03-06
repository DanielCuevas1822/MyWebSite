import React from "react";
import "../assets/styles/containers/MyProyects.scss";
import Proyect from "../components/Proyect";
import { connect } from "react-redux";

const MyProyects = (props) => {
  return (
    <div className="myproyects">
      <div className="container">
        <img className="mask" src="https://firebasestorage.googleapis.com/v0/b/mywebsite-4f1c2.appspot.com/o/Masks%2FMascara2.png?alt=media&token=308db41c-b333-418b-bc59-66216b2493ac" alt="mask" />
        <div className="row">
          <div className="section col-12">
            <div className="myproyects__title">
              <h2>Mis Proyectos</h2>
              <p>
                Estos son algunos de los trabajos realizados durante mi carrera
                profesional.
              </p>
            </div>
            <div className="myproyects__list">
              {props.proyects.map((item) => (
                <Proyect key={item.id} info={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStatetoProps = (state) => {
  return {
    proyects: state.proyects,
  };
};

export default connect(mapStatetoProps)(MyProyects);
