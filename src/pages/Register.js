import './Register.css';

const Register = () => {
    return (
        <div>
            <h1>Inscription</h1>
       
            <form className='center'> 
               
                <div className="form-group">
                    
                    <input type="text" className="form-control" placeholder="Nom" />
                </div>

                <div className="form-group">
                    
                    <input type="text" className="form-control" placeholder="Prenom" />
                </div>

                <div className="form-group">
                    
                    <input type="email" className="form-control" placeholder="Email" />
                </div>

                <div className="form-group">
                   
                    <input type="password" className="form-control" placeholder="Password" />
                </div>

                <button type="submit" className="btn btn-primary btn-block mt-4">S'inscrire</button>
                
            </form>
      </div>
    );
};

export default Register;