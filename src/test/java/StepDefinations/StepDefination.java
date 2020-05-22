package StepDefinations;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import cucumber.api.java.en.Then;
import cucumber.api.java.Before;

import cucumber.api.junit.Cucumber;
import io.restassured.RestAssured;

import io.restassured.path.json.JsonPath;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;

import org.junit.Assert;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
public class StepDefination {
	private Response response;
	private RequestSpecification request;

	@Before
	public void setUp() {
		RestAssured.baseURI = "https://api.ratesapi.io";
		RestAssured.basePath = "/api";
	}

	@Given("^The endpoint is already configured$")
	public void the_endpoint_is_already_configured() throws Throwable {
		System.out.println("Endpoint is already configured");
		request = RestAssured.given();
	}

	@When("^I input a valid date \"([^\"]*)\"$")
	public void i_input_a_valid_date_something(String strArg1) throws Throwable {
		System.out.println("Date Entered Value is::"+strArg1);
		response = request.when().get("/"+strArg1+"");
		response.then().log().all();
		System.out.println("Response for::"+strArg1+":: is "+response.asString());
		JsonPath js=new JsonPath(response.asString());
		//		String Date=js.get("date");
		Assert.assertNotNull(js.get("date"));
		Assert.assertNotNull(js.get("base"));
		Assert.assertNotNull(js.get("rates"));
		Assert.assertNotNull(js.get("rates.GBP"));
		Assert.assertNotNull(js.get("rates.HKD"));
		Assert.assertNotNull(js.get("rates.IDR"));
		Assert.assertNotNull(js.get("rates.ILS"));
		Assert.assertNotNull(js.get("rates.DKK"));
		Assert.assertNotNull(js.get("rates.INR"));

		Assert.assertNotNull(js.get("rates.CHF"));
		Assert.assertNotNull(js.get("rates.MXN"));
		Assert.assertNotNull(js.get("rates.CZK"));
		Assert.assertNotNull(js.get("rates.SGD"));
		Assert.assertNotNull(js.get("rates.THB"));
		Assert.assertNotNull(js.get("rates.HRK"));
		Assert.assertNotNull(js.get("rates.MYR"));
		Assert.assertNotNull(js.get("rates.NOK"));
		Assert.assertNotNull(js.get("rates.CNY"));
		Assert.assertNotNull(js.get("rates.BGN"));
		Assert.assertNotNull(js.get("rates.PHP"));
		Assert.assertNotNull(js.get("rates.SEK"));
		Assert.assertNotNull(js.get("rates.PLN"));
		Assert.assertNotNull(js.get("rates.ZAR"));
		Assert.assertNotNull(js.get("rates.CAD"));
		Assert.assertNotNull(js.get("rates.BRL"));
		Assert.assertNotNull(js.get("rates.RON"));
		Assert.assertNotNull(js.get("rates.NZD"));
		Assert.assertNotNull(js.get("rates.TRY"));
		Assert.assertNotNull(js.get("rates.JPY"));
		Assert.assertNotNull(js.get("rates.RUB"));
		Assert.assertNotNull(js.get("rates.KRW"));
		Assert.assertNotNull(js.get("rates.USD"));
		Assert.assertNotNull(js.get("rates.HUF"));
		Assert.assertNotNull(js.get("rates.AUD"));


	}


	@Then("^I should have the status code \"([^\"]*)\"$")
	public void i_should_have_the_status_code(String arg1) throws Throwable {
		System.out.println("Status Code is::"+arg1);
		response.then().assertThat().statusCode(Integer.parseInt(arg1));
	}

	@When("^I input a invalid date \"([^\"]*)\"$")
	public void i_input_a_invalid_date(String arg1) throws Throwable {
		System.out.println("Invalid Date Entered Value is::"+arg1);
		response = request.when().get("/"+arg1+"");
		response.then().log().all();
		System.out.println("Response for::"+arg1+":: is "+response.asString());
		JsonPath js=new JsonPath(response.asString());
		System.out.println("Date is::"+arg1+":: is "+js.getJsonObject("error"));
		String error=js.get("error");
		String error1="time data 'api' does not match format '%Y-%m-%d'";
		System.out.println("Error message is::"+error);
		System.out.println("Error message2  is::"+error1);
		if(arg1.equals(""))
		{
			Assert.assertEquals(error,error1);
		}
		else
		{
			Assert.assertEquals("time data '"+arg1+"' does not match format '%Y-%m-%d'",error);
		}

	}	  
}