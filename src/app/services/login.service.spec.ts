import { LoginService } from "./login.service";
import { of } from "rxjs";

describe("LoginService", () => {
  it("call remote authentication service", done => {
    let httpClient = jasmine.createSpyObj(["post"]);
    httpClient.post.and.returnValue(of("success"));
    const service = new LoginService(httpClient);
    service.login("any", "secret").subscribe(resp => {
      expect(resp).toEqual("success");
      expect(httpClient.post).toHaveBeenCalledWith(
        "https://angular-training-backend.herokuapp.com/api/login",
        { email: "any", password: "secret" },
        {
          responseType: "text",
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
      expect(service.token).toEqual("success");
      done();
    });
  });
});
