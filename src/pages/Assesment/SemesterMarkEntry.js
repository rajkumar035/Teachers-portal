import React, { useState } from 'react';
import PageContent from '../../components/PageContent';
import PageHeader from '../../components/PageHeader';
import FormLabel from '../../components/FormLabel';
import GlassSheet from '../../components/GlassSheet';
import GreenButton from '../../components/GreenButton';
import InputField from '../../components/InputField';
import { Field, Form, Formik } from 'formik';

const SemesterMarkEntry = () => {
  const [studentsMarkList, setStudentsMarkList] = useState([]);

  return (
    <div>
      <PageHeader text='Semester Marks Entry' />
      <PageContent>
        <GlassSheet>
          <Formik
            initialValues={{
              rollNo: '',
              markSecured: '',
            }}
            onSubmit={(values) => {
              setStudentsMarkList((prevItems) => [...prevItems, values]);
            }}>
            <Form>
              <div>
                <FormLabel name='Roll No' />
                <InputField type='text' name='rollNo' />
              </div>
              <div>
                <FormLabel name='Marks Secured' />
                <InputField type='text' name='markSecured' />
              </div>
              <GreenButton
                style={{ marginTop: '3rem', width: '100%', color: 'white' }}>
                Add Marks
              </GreenButton>
            </Form>
          </Formik>
        </GlassSheet>
        <PageHeader style={{ marginTop: '5rem' }} text='' />
        <PageContent>
          {studentsMarkList.length !== 0 ? (
            <table>
              <thead>
                <tr>
                  <th>SNO</th>
                  <th>Roll No</th>
                  <th>Marks</th>
                </tr>
              </thead>
              <tbody>
                {studentsMarkList.map((item, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.rollNo}</td>
                    <td>{item.markSecured}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : null}
        </PageContent>
        <PageContent>
          <GlassSheet>
            <Formik
              initialValues={{
                semester: '',
                courseCode: '',
                batch: '',
              }}
              onSubmit={(values) => {
                console.log({ ...values, studentsMarkList });
              }}>
              <Form>
                <FormLabel name='Course Code'>
                  <InputField
                    type='text'
                    name='courseCode'
                    style={{ height: '6.5rem' }}
                  />
                </FormLabel>
                <div style={{ display: 'flex', gap: '2rem' }}>
                  <FormLabel name='Semester'>
                    <Field
                      as='select'
                      name='semester'
                      style={{ width: '100%' }}>
                      <option>Select</option>
                      {['1', '2', '3', '4', '5', '6', '7', '8'].map(
                        (item, index) => (
                          <option key={index} value={item}>
                            {item}
                          </option>
                        )
                      )}
                    </Field>
                  </FormLabel>
                  <FormLabel name='Batch'>
                    <Field as='select' name='batch' style={{ width: '100%' }}>
                      <option>Select</option>
                      {['2018', '2019', '2021', '2022'].map((item, index) => (
                        <option key={index} value={item}>
                          {item}
                        </option>
                      ))}
                    </Field>
                  </FormLabel>
                </div>
                <GreenButton
                  style={{ marginTop: '3rem', width: '100%', color: 'white' }}>
                  Add Marks
                </GreenButton>
              </Form>
            </Formik>
          </GlassSheet>
        </PageContent>
      </PageContent>
    </div>
  );
};

export default SemesterMarkEntry;
