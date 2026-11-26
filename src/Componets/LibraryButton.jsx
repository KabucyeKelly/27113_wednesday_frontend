function LibraryButton({buttonLabel, buttonAction}){


    return(

        <div><button onClick={buttonAction}>{buttonLabel} </button></div>
    )
}

export default LibraryButton;