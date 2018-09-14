# Ng Simple Wizard
### Example usage:

    <app-stepping>
	    <app-step title="Stage One">
			<!-- content -->
		</app-step>
	    <app-step title="Stage Two">
			<!-- content -->
		</app-step>
	    <app-step title="Stage Three">
			<!-- content -->
		</app-step>
    </app-stepping>

## AppStepping Ouput Events
 - beforeStep - Before moving to the next step on the wizard.
 - afterStep - After successfully moved to the next step.
 - completed - Emitted once finished button is clicked.

## AppStep Input Properties
 - title - The title of the Step.
 - isValid - Determine if current step is valid before moving to the next one.
 - disabled - Will disable the step (will not be shown in the wizard)

## To run test, run:
    ng test

--End--
