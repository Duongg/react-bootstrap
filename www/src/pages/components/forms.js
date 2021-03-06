import { graphql } from 'gatsby';
import React from 'react';

import withLayout from '../../withLayout';
import Heading from '../../components/Heading';
import ComponentApi from '../../components/ComponentApi';
import ReactPlayground from '../../components/ReactPlayground';

import FormBasic from '../../examples/Form/Basic';
import FormTextControls from '../../examples/Form/TextControls';
import FormInputSizes from '../../examples/Form/InputSizes';
import Plaintext from '../../examples/Form/Plaintext';
import Check from '../../examples/Form/Check';
import CheckInline from '../../examples/Form/CheckInline';
import NoLabels from '../../examples/Form/NoLabels';
import FormGroup from '../../examples/Form/FormGroup';
import GridBasic from '../../examples/Form/GridBasic';
import FormRow from '../../examples/Form/FormRow';
import GridComplex from '../../examples/Form/GridComplex';
import Horizontal from '../../examples/Form/Horizontal';
import ValidationNative from '../../examples/Form/ValidationNative';
import ValidationFormik from '../../examples/Form/ValidationFormik';
import CheckApi from '../../examples/Form/CheckApi';

export default withLayout(function FormControlsSection({ data }) {
  return (
    <>
      <Heading h="1" id="forms">
        Forms
      </Heading>
      <p>
        The <code>{'<FormControl>'}</code> component renders a form control with
        Bootstrap styling. The <code>{'<FormGroup>'}</code> component wraps a
        form control with proper spacing, along with support for a label, help
        text, and validation state. To ensure accessibility, set{' '}
        <code>controlId</code> on <code>{'<FormGroup>'}</code>, and use{' '}
        <code>{'<FormLabel>'}</code> for the label.
      </p>
      <ReactPlayground codeText={FormBasic} />
      <p>
        The <code>{'<FormControl>'}</code> component directly renders the{' '}
        <code>{'<input>'}</code> or other specified component. If you need to
        access the value of an uncontrolled <code>{'<FormControl>'}</code>,
        attach a <code>ref</code> to it as you would with an uncontrolled input,
        then call <code>ReactDOM.findDOMNode(ref)</code> to get the DOM node.
        You can then interact with that node as you would with any other
        uncontrolled input.
      </p>
      <p>
        If your application contains a large number of form groups, we recommend
        building a higher-level component encapsulating a complete field group
        that renders the label, the control, and any other necessary components.
        We don't provide this out-of-the-box, because the composition of those
        field groups is too specific to an individual application to admit a
        good one-size-fits-all solution.
      </p>
      <Heading h="2" id="forms-controls">
        Form controls
      </Heading>
      <p>
        For textual form controls—like <code>input</code>s, <code>select</code>s,
        and <code>textarea</code>s—use the <code>FormControl</code> component.
        FormControl adds some additional styles for general appearance, focus
        state, sizing, and more.
      </p>
      <ReactPlayground codeText={FormTextControls} />
      <Heading h="3" id="forms-input-sizes">
        Sizing
      </Heading>
      <p>
        Use <code>size</code> on <code>{'<FormControl>'}</code> to change the
        size of inputs.
      </p>
      <ReactPlayground codeText={FormInputSizes} />
      <Heading h="3" id="forms-input-Plaintext">
        Plaintext
      </Heading>
      <p>
        If you want to have elements in your form styled as plain text, use the{' '}
        <code>plaintext</code> prop on FormControls to remove the default form
        field styling and preserve the correct margin and padding.
      </p>
      <ReactPlayground codeText={Plaintext} />
      <Heading h="2" id="forms-form-check">
        Checkboxes and Radios
      </Heading>
      <p>
        For the non-textual checkbox and radio controls, <code>FormCheck</code>{' '}
        provides a single component for both types that adds some additional
        styling and improved layout.
      </p>
      <Heading h="3" id="forms-check-stacked">
        Default (stacked)
      </Heading>
      <p>
        By default, any number of checkboxes and radios that are immediate
        sibling will be vertically stacked and appropriately spaced with
        FormCheck.
      </p>
      <ReactPlayground codeText={Check} />
      <Heading h="3" id="forms-check-inline">
        Inline
      </Heading>
      <p>
        Group checkboxes or radios on the same horizontal row by adding the{' '}
        <code>inline</code> prop.
      </p>
      <ReactPlayground codeText={CheckInline} />
      <Heading h="3" id="forms-check-inline">
        Without labels
      </Heading>
      <p>
        When you render a FormCheck without a label (no <code>children</code>)
        some additional styling is applied to keep the inputs from collapsing.{' '}
        <strong>
          Remember to add an <code>aria-label</code> when omitting labels!
        </strong>
      </p>
      <ReactPlayground codeText={NoLabels} />

      <Heading h="3" id="forms-check-api">
        Customizing FormCheck rendering
      </Heading>

      <p>
        When you need tighter control, or want to customize how the{' '}
        <code>FormCheck</code> component renders, it may better to use it's
        constituent parts directly.
      </p>
      <p>
        By provided <code>children</code> to the <code>FormCheck</code> you can
        forgo the default rendering and handle it yourself. (You can still
        provide an <code>id</code> to the <code>FormCheck</code> or{' '}
        <code>FormGroup</code> and have it propogate to the label and input).
      </p>
      <ReactPlayground codeText={CheckApi} />

      <Heading h="2" id="forms-layout">
        Layout
      </Heading>
      <p>
        FormControl and FormCheck both apply <code>display: block</code> with{' '}
        <code>width: 100%</code> to controls, which means they stack vertically
        by default. Additional components and props can be used to vary this
        layout on a per-form basis.
      </p>
      <Heading h="3" id="forms-layout-group">
        Form group
      </Heading>
      <p>
        The <code>FormGroup</code> component is the easiest way to add some
        structure to forms. It provides a flexible container for grouping of
        labels, controls, optional help text, and form validation messaging. By
        default it only applies margin-bottom, but it picks up additional styles
        in <code>{'<Form inline >'}</code> as needed. Use it with{' '}
        <code>fieldset</code>s, <code>div</code>s, or nearly any other element.
      </p>
      <p>
        You also add the <code>controlId</code> prop to accessibly wire the
        nested label and input together via the <code>id</code>.
      </p>
      <ReactPlayground codeText={FormGroup} />
      <Heading h="3" id="forms-layout-grid">
        Form grid
      </Heading>
      <p>
        More complex forms can be built using the grid components. Use these for
        form layouts that require multiple columns, varied widths, and
        additional alignment options.
      </p>
      <ReactPlayground codeText={GridBasic} />
      <Heading h="4" id="forms-layout-form-row">
        Form row
      </Heading>
      <p>
        You may also swap <code>{'<Row>'}</code> for <code>{'<Form.Row>'}</code>,
        a variation of the standard grid row that overrides the default column
        gutters for tighter and more compact layouts.
      </p>
      <ReactPlayground codeText={FormRow} />
      <p>More complex layouts can also be created with the grid system.</p>
      <ReactPlayground codeText={GridComplex} />
      <Heading h="3" id="forms-layout-form-row">
        Horizontal forms
      </Heading>
      <p>
        You may also swap <code>{'<Row>'}</code> for <code>{'<Form.Row>'}</code>,
        a variation of the standard grid row that overrides the default column
        gutters for tighter and more compact layouts.
      </p>
      <ReactPlayground codeText={Horizontal} />

      <Heading h="2" id="forms-validation">
        Validation
      </Heading>
      <p>
        Provide valuable, actionable feedback to your users with form validation
        feedback.
      </p>
      <Heading h="3" id="forms-validation-native">
        Native HTML5 form validation
      </Heading>
      <p>
        For native HTML form validation–
        <a href="https://caniuse.com/#feat=form-validation">
          available in all our supported browsers
        </a>, the <code>:valid</code> and <code>:invalid</code> pseudo selectors
        are used to apply validation styles as well as display feedback
        messages.
      </p>
      <p>
        Bootstrap scopes the <code>:valid</code> and <code>:invalid</code>{' '}
        styles to parent <code>.was-validated</code> class, usually applied to
        the <code>Form</code> (you can use the <code>validated</code> prop as a
        shortcut). Otherwise, any required field without a value shows up as
        invalid on page load. This way, you may choose when to activate them
        (typically after form submission is attempted).
      </p>
      <ReactPlayground codeText={ValidationNative} />

      <Heading h="3" id="forms-validation-libraries">
        Form libraries and server rendered styles.
      </Heading>
      <p>
        It's often beneficial (especially in React) to handle form validation
        via a library like Formik, or react-formal. In those cases,{' '}
        <code>isValid</code> and <code>isInvalid</code> props can be added to
        form controls to manually apply validation styles. Below is a quick
        example integrating with{' '}
        <a href="https://github.com/jaredpalmer/formik">Formik</a>.
      </p>
      <ReactPlayground codeText={ValidationFormik} />

      <Heading h="3" id="forms-validation-examples">
        Examples
      </Heading>

      <Heading h="2" id="forms-props">
        Props
      </Heading>
      <ComponentApi metadata={data.FormGroup} />
      <ComponentApi metadata={data.FormControl} />
      <ComponentApi metadata={data.FormLabel} />
      <ComponentApi metadata={data.FormCheck} />
      <ComponentApi metadata={data.Feedback} />
    </>
  );
});

export const query = graphql`
  query FormQuery {
    Form: componentMetadata(displayName: { eq: "Form" }) {
      displayName
      ...ComponentApi_metadata
    }
    FormGroup: componentMetadata(displayName: { eq: "FormGroup" }) {
      displayName
      ...ComponentApi_metadata
    }
    FormControl: componentMetadata(displayName: { eq: "FormControl" }) {
      displayName
      ...ComponentApi_metadata
    }
    FormLabel: componentMetadata(displayName: { eq: "FormLabel" }) {
      displayName
      ...ComponentApi_metadata
    }
    FormCheck: componentMetadata(displayName: { eq: "FormCheck" }) {
      ...ComponentApi_metadata
    }
    Feedback: componentMetadata(displayName: { eq: "Feedback" }) {
      ...ComponentApi_metadata
    }
  }
`;
