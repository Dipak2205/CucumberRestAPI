package CucumberActions;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions( 
		features = "src/test/java/Features",dryRun=false,monochrome=true, 
		glue =  "StepDefinations", strict=true ,
		plugin= {"pretty","html:target/Cucumber","json:target/Cucumber.json","junit:target/cukes.xml"}
		)
public class TestRunner {

}
