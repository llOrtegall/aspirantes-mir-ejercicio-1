    /** 
     *  TODO: forma de recuperar los valores de los inputs mediante el id del input y el value
     *  const title = (document.getElementById('title_new_todo') as HTMLInputElement).value
     *  const description = (document.getElementById('description_new_todo') as HTMLInputElement).value
     * ------------------------------------------------------------------------------------------
     *   TODO: forma de recuperar los valores de los inputs mediante el name del input y el value usando FormData la cual es una clase que permite crear objetos clave/valor
     *   const data = new FormData(ev.target as HTMLFormElement)
     *   const getTitle = data.get('titulo')
     *   const getDescription = data.get('descripcion')
     * ------------------------------------------------------------------------------------------
     *   TODO: forma de recuperar los valores de los inputs mediante el name del input y el value usando FormData la cual es  una clase 
     *   que permite crear objetos clave/valor  y luego convertirlo a un objeto con Object.fromEntries  
     *   const fields = Object.fromEntries(new window.FormData(ev.target as HTMLFormElement))
     *   console.log(fields);
     */