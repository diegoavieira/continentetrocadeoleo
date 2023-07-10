import React, { useEffect, useRef, useState, MouseEvent } from 'react';
import { Box, Button } from '@material-ui/core';
import { RdsField, RdsForm, RdsMenu, RdsText } from '@rdsystem/components';
import { RdsOptionProps } from '@rdsystem/components/RdsField/RdsField.props';
import RdsListItemProps from '@rdsystem/components/RdsListItem/RdsListItem.props';
import * as Yup from 'yup';
import useSWR from 'swr';
import axios from 'axios';

const initialValues = {
  name: '',
  email: '',
  file: null,
  date: new Date(),
  time: new Date(),
  multiline: '',
  number: 2,
  select: null,
  filter: null,
  multiple: [{ key: 'test4', primary: 'Test4' }],
  currency: 0
};

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Required').min(4, 'Minimum 4 characters'),
  email: Yup.string().email('Format invalid').required('Required'),
  file: Yup.mixed().test('fileType', 'Unsupported format', (value) =>
    value ? ['text/plain'].includes(value.type) : true
  ),
  date: Yup.date()
    .typeError('Format invalid')
    .min(new Date().toDateString(), 'Minimum date is today')
    .nullable()
    .required('Required'),
  time: Yup.date().nullable().required('Required'),
  select: Yup.object().nullable().required('Required'),
  filter: Yup.object().nullable().required('Required')
});

const options: RdsOptionProps[] = [
  {
    key: 'test4',
    primary: 'Test4'
  },
  {
    key: 'test2',
    primary: 'Test2',
    secondary: 'secondary'
  },
  {
    key: 'test',
    primary: 'Test'
  }
];

interface DateProps {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

const Form = () => {
  const [query, setQuery] = useState('');
  const [filterOptions, setFilterOptions] = useState<RdsOptionProps[]>([]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const formRef = useRef<any>(null);

  const { data, error } = useSWR(query ? `https://jsonplaceholder.typicode.com/todos?&q=${query}` : null, fetcher);
  const loading = !!(data === undefined && !error);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const onOpen = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const onClose = () => {
    setAnchorEl(null);
  };

  const items: RdsListItemProps['item'][] = [
    {
      key: '1',
      primary: 'test',
      action: (item) => {
        console.log(item);
        onClose();
      }
    }
  ];

  useEffect(() => {
    if (!query) {
      setFilterOptions([]);
    }
  }, [query]);

  useEffect(() => {
    if (data && data.length) {
      const options = data.slice(0, 10).map((el: DateProps) => ({ key: `${el.id}`, primary: el.title }));
      setFilterOptions(options);
    }
  }, [data]);

  return (
    <Box display="flex" flexDirection="column" margin="24px auto">
      <RdsForm
        validationSchema={validationSchema}
        initialValues={initialValues}
        id="formId"
        ref={formRef}
        onSubmit={(values, actions) => {
          console.log(JSON.stringify(values, null, 2));
          console.log(actions);
        }}
      >
        {(props) => (
          <>
            <Box display="flex" flexDirection="column">
              <RdsField
                name="file"
                type="file"
                label="Choose a file"
                accept=".txt"
                margin="0 0 16px 0"
                helperText={
                  <RdsMenu document={document} items={items} anchorEl={anchorEl} onClose={onClose}>
                    <RdsText type="a" color="primary" onClick={onOpen}>
                      Download
                    </RdsText>
                  </RdsMenu>
                }
                onFileLoaded={(value) => console.log(value)}
              />

              <RdsField
                name="filter"
                required
                select
                options={filterOptions}
                label="Filter"
                margin="0 0 16px 0"
                onOptionSelected={(option) => console.log(option)}
                onSearch={(query) => setQuery(query)}
                loading={query ? loading : false}
              />

              <RdsField name="currency" currency="BRL" label="Number Currency" margin="0 0 16px 0" />

              <RdsField
                name="select"
                select
                options={options}
                label="Select"
                margin="0 0 16px 0"
                onOptionSelected={(option) => console.log(option)}
                required
              />

              <RdsField
                name="multiple"
                select
                options={options}
                multiple
                label="Multiple"
                margin="0 0 16px 0"
                hideSelectedLabel
                onOptionSelected={(option) => console.log(option)}
              />

              <RdsField name="name" label="Name" margin="0 0 16px 0" helperText="Helper text" required />

              <RdsField name="email" label="Email" margin="0 0 16px 0" required helperText="Helper text" />

              <Box display="flex">
                <RdsField name="date" datepicker label="Date" required minDate={new Date()} margin="0 16px 16px 0" />
                <RdsField name="time" timepicker label="Time" required margin="0 0 16px 0" />
              </Box>

              <RdsField name="multiline" multiline label="Multiline" margin="0 0 16px 0" />

              <RdsField name="number" type="number" label="Number" margin="0 0 16px 0" />
            </Box>
            <Box display="flex">
              <Button type="submit">Submit</Button>
              <Button type="reset">Reset</Button>
              <Button onClick={() => props.setFieldValue('multiline', 'props.values.name')}>Set multiline value</Button>
            </Box>
          </>
        )}
      </RdsForm>
      <Box display="flex">
        <Button form="formId" type="submit">
          Submit ID
        </Button>
        <Button form="formId" type="reset">
          Reset ID
        </Button>
        <Button form="formId" onClick={() => formRef.current?.setFieldValue('multiline', 'props.values.name')}>
          Set multiline value
        </Button>
      </Box>
    </Box>
  );
};

export default Form;
