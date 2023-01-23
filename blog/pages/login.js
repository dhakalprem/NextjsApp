
import styles from '@/styles/Home.module.css'
export default function Home() {
  return (
    <>
     <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO"
      crossorigin="anonymous"/>

   <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ"
      crossorigin="anonymous"/>

     <div class="container-fluid">
      <div class="row justify-content-center custom-margin">
         <div class="col-sm-6 col-md-4">
            <form action="#" class="shadow-lg p-4 text-white">
               <div class="form-group">
                  <i class="fas fa-user"></i><label for="email" class="pl-2 font-weight-bold">Email</label>
                  <input type="email" class="form-control" placeholder="Email"/>
                  <small class="form-text">We'll never share your email with anyone else.</small>
               </div>
               <div class="form-group">
                  <i class="fas fa-key"></i><label for="pass" class="pl-2 font-weight-bold">Password</label>
                  <input type="password" class="form-control" placeholder="Password"/>
               </div>
               <div class="form-check">
                  <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                  <label class="form-check-label" for="exampleCheck1">Remember Me ?</label>
               </div>
               <button type="submit" class="btn btn-outline-success mt-3 btn-block shadow-sm font-weight-bold">Submit</button>
            </form>
         </div>
      </div>
   </div>

  
   <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
      crossorigin="anonymous"></script>
   <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49"
      crossorigin="anonymous"></script>
   <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy"
      crossorigin="anonymous"></script>

  </>
  )
}
