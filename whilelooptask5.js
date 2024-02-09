function enrollStudents(maxCapacity) {
    let enrolledStudents = 0;
    console.log('Max capacity: ' + maxCapacity);

    while (enrolledStudents < maxCapacity) {
        console.log('Number of enrolled Students: ' + enrolledStudents);
        console.log('Remaining capacity: ' + (maxCapacity - enrolledStudents));

        let name = prompt('Enter the Student name: ');
        let email = prompt('Enter the Student email: ');
        let phno = prompt('Enter the Student phone number: ');

        enrolledStudents += 1;
        console.log('Enrollment Successful for ' + name);

        // Ask if user wants to continue enrolling
        let continueEnrollment = prompt('Do you want to enroll another student? (yes/no)');

        if (continueEnrollment.toLowerCase() !== 'yes') {
            break;
        }
    }

    if (enrolledStudents === maxCapacity) {
        console.log('Enrollment closed as Maximum Capacity reached');
    }
}

enrollStudents(50);
