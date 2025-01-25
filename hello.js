import { Selector } from 'testcafe';

fixture `Test Input Field`
    .page `https://example.com`;  // Replace with the actual URL of the page

test('Type name into the text field with id "shub18"', async t => {
    const textField = Selector('#shub18');  // Selector for the input field with ID 'shub18'
    
    // Ensure the text field exists and is visible
    await t
        .expect(textField.exists).ok('Text field does not exist')  // Check if the text field exists
        .expect(textField.visible).ok('Text field is not visible')  // Check if the text field is visible

        // Type your name into the text field
        .typeText(textField, 'Shubham')  // Type "Shubham" into the field

        // Optional: Assert that the field contains the typed value
        .expect(textField.value).eql('Shubham', 'The text field value is incorrect');
});