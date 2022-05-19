
import React, { Fragment, useState } from 'react';
import { GradeSistema } from '../../Components/Content/Style';
import { DEFAULT_IMAGEM, SERVIDOR_POST_IMAGEM } from '../../Config/Config';
import { INIT_USUARIO } from './Usuario';
import { postFotoUsuario, deleteFotoUsuario } from '../../Service/UsuarioService';

const Inserir = () => {
     
    const [foto, setFoto] = useState('');
    const [imagem, setImagem] = useState('');
    const [contentType, setContentType] = useState('');
    const [usuario, setUsuario] = useState(INIT_USUARIO);

    
    const selectFile = async (e) =>{
        e.preventDefault();
        if (e.target.files && e.target.files[0]){
            let fileName  = e.target.files[0]
            const reader = new FileReader();
            reader.onload = (e) => {
              setImagem(e.target.result)
            }
            reader.readAsDataURL(fileName);
            let formData = new FormData();
            formData.append("id", document.getElementById("id").value);
            formData.append("foto",fileName);

            const data_foto = await postFotoUsuario(formData);
            
            console.log(data_foto)

            setImagem(data_foto.nomeArquivo);
            setContentType(data_foto.contentType);
            setFoto(data_foto.nomeArquivo);

        }

    }

    const excluirFoto = async (e) => {
        e.preventDefault();   
      
        const data_foto = await deleteFotoUsuario(foto);
        

    }


    return (
        <Fragment>
            <GradeSistema>
                <div className='container'>
                   <form id="form">
                    <div className="row">
                        <div className='col-sm-4'>
                            <div className='row'>
                                <div className='col-xs-12 col-sm-12 col-md-12'>
                                    <div className='form-group>'>
                                      <div id="drop-zone">
                                          <input type="hidden" 
                                                 id="imagem" 
                                                 name="imagem" 
                                                 value={imagem}/>
                                          <input type="hidden" 
                                                 id="contentType" 
                                                 name="contentType" 
                                                 value={contentType}/>
                                          <div id="fotoDisco">
                                              <img src={ foto === '' ? 
                                                         DEFAULT_IMAGEM : 
                                                         `${SERVIDOR_POST_IMAGEM}${foto}`}
                                                         className="avatar"
                                                         id="imagemUpload"
                                                         name="upload"/>
                                          </div>
                                          <div id="clickHereLeft">
                                               <input type="file"
                                                      accept='.jpg, .jpeg, .png'
                                                      id="fileInput"
                                                      className='form-control hide btn-responsive'  
                                                      onChange={(e)=>selectFile(e)}
                                                    /> 
                                                <div style={{ textAlign:"center" }}>
                                                    l;<label htmlFor="fileInput">
                                                        <i className='fa fa-upload fa-lg' aria-hidden="true"></i>
                                                    </label>
                                                </div>    
                                          </div>
                                          <div id="clickHereRight">
                                              <input type="button"
                                                     id="fileExcluir"
                                                     className='form-control hide btn-responsive'
                                                     onClick={(e)=>excluirFoto(e)}/>
                                              <div style={{ textAlign:"center" }}>
                                                    <label htmlFor="fileExcluir">
                                                        <i className='fa fa-trash fa-lg'></i>
                                                    </label>
                                              </div>       
                                          </div>
                                      </div> 
                                      </div>  
                                </div>
                            </div>
                        </div>
                        <div className='col-sm-8'>
                            <div className='row'>
                                <div className='col-xs-12 col-sm-12 col-md-12'>
                                     <div className='form-group'>
                                         <label className='control-label'>Nome:</label>
                                         <input type='text'
                                                name="username"
                                                id="username"
                                                className='form-control'
                                                value={usuario.username}/>

                                     </div>
                                </div>
                            </div>
                            <input type="hidden" id="id"/>
                            
                        </div>
                    </div>


                    </form>
                </div>
             
          
            </GradeSistema>
        </Fragment>
    )

}

export default Inserir;