import { useForm } from 'react-hook-form'
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
  Text,
  Flex
} from '@chakra-ui/react'

export default function PayForm() {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm()

  const onSubmit = async (values) => {
    console.log(JSON.stringify(values, null, 2))
   
  }

  return (
    <Flex justifyContent={'center'} alignItems={'center'} p={5} mt={10}>
    <form onSubmit={handleSubmit(onSubmit)}>
        <Text
        fontFamily={'heading'}
        fontSize={'x-large'}
        fontweight={600}
        mb={4}>
            Pay Your Due
        </Text>
      <FormControl isInvalid={errors.payment}>
        <Input
          id='payment'
          type='number'
          step='any'
          placeholder='payment'
          {...register('payment', {
            required: 'This is required',
          })}
        />
        <FormErrorMessage>
          {errors.payment && errors.payment.message}
        </FormErrorMessage>
      </FormControl>
      <Button mt={4} colorScheme='teal' isLoading={isSubmitting} type='submit'>
        Submit
      </Button>
    </form>
    </Flex>
  )
}