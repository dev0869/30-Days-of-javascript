 let dynamicCard = (item) => {
    return `
          <div class="card"  style="width:30rem ">
          <h5 class="card-header">User: ${item.login.username}</h5>
          <div class="card-body">
            <div class="row">
              <div class="col">
                <h4 class="card-title">
                  ${item.name.title} ${item.name.first} ${item.name.last}
                </h4>
                <p class="card-text">Email: ${item.email}</p>
              </div>
              <div class="col-3">
                <img
                  src=${item.picture.medium}
                  class="img-fluid rounded mb-3 float-right"
                ></img>
              </div>
            </div>
            <div class="row d-flex flex-nowrap">
              <div class="col">
                <h5 class="card-text mb-0">
                  User for ${item.registered.age}{" "}
                  ${item.registered.age === 1 ? "year" : " years"}
                </h5>
                <p class="card-text mb-0">Age: ${item.dob.age}</p>
                <p class="card-text mb-0">Nationality: ${item.nat}</p>
                <p class="card-text mb-0">Phone : ${item.phone}</p>
              </div>
              <div class="col text-right">
                <h6 class="card-text mb-0">Address:</h6>
                <p class="card-text mb-0">
                  <small>
                    ${item.location.street.number} ${item.location.street.name},
                  </small>
                </p>
                <p class="card-text mb-0 text-wrap">
                  <small>
                   ${item.location.state}, ${item.location.country},
                  </small>
                </p>
                <p class="card-text mb-0">
                  <small>${item.location.postcode}</small>
                </p>
              </div>
            </div>
          </div>
          </div>`;
  };