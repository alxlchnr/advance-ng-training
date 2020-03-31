import { AuthGuard } from "./auth.guard";

describe("AuthGuard", () => {
  let loginServiceMock;
  let routerMock;
  beforeEach(() => {
    routerMock = jasmine.createSpyObj(["navigate"]);
    loginServiceMock = { token: undefined };
  });

  it("allows navigation when token is present", () => {
    loginServiceMock.token = "someToken";
    expect(
      new AuthGuard(loginServiceMock, routerMock).canActivate(null, null)
    ).toBeTruthy();
  });

  it("aredirects to login when no token is present", () => {
    expect(
      new AuthGuard(loginServiceMock, routerMock).canActivate(null, null)
    ).toBeFalsy();
    expect(routerMock.navigate).toHaveBeenCalledWith(["/login"], {
      replaceUrl: true
    });
  });
});
