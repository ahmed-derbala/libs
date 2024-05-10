import { ApiProperty } from '@nestjs/swagger'
import { IsEmail, IsNotEmpty, IsString } from 'class-validator'

export class SignupDto {
	@IsEmail()
	@IsNotEmpty()
	@ApiProperty({
		type: String,
		description: 'email'
	})
	email: String

	@IsString()
	@ApiProperty({
		type: String,
		description: 'password'
	})
	password: string
}
