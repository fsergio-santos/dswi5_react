
import banco from "../Config/Banco";

export const createUsuario = async ( usuario ) => {
    return (
        banco({
            method:'post',
            url:'/usuario/inserir',
            data:usuario
        }).then ((resposta)=>{
            return resposta.data
        }).catch((errors)=>{
            return errors.response;
        })
    )
}
export const postFotoUsuario = async (formData) => {
    return(
        banco({
            method:'post',
            url:'/foto/gravar',
            data:formData,
            headers:{
                'Content-type': 'multipart/form-data'
            } 
        }).then(res=>{
           return res.data;
        })
    )
}

export const deleteFotoUsuario = async (fotoCadastrada) => {
    return(
        banco({
            method:'delete',
            url:'/foto/delete',
            data:fotoCadastrada,
        }).then(res=>{
           return res.data;
        })
    )
}