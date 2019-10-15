package testRunner;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;



@RunWith( Cucumber.class )
@CucumberOptions(
         features = "C:\\Users\\siva\\IdeaProjects\\BDDFRAME\\Feature\\Background.feature",
         glue = "stepDefinitions",
         plugin = {"pretty" , "html:test-output"}

)
public class TestRunner {

}
