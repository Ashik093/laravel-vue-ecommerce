<template>
    <div>
        <section class="pages login-page section-padding">
			<div class="container">
				<div class="row">
					<div class="col-sm-10">
						<div class="main-input padding60 new-customer">
							<div class="log-title">
								<h3><strong>new customers</strong></h3>
							</div>
							<div class="custom-input">
								<form method="post" @submit.prevent="userRegister()">
									<input type="text" v-model="form.name" placeholder="Name here.." />
									<span class="text-danger" v-if="errors['name']">{{errors['name'][0]}}</span>
									<input type="email" v-model="form.email" placeholder="Email Address.." />
									<span class="text-danger" v-if="errors['email']">{{errors['email'][0]}}</span>
									<input type="text" v-model="form.phone" placeholder="Phone Number.." />
									<span class="text-danger" v-if="errors['phone']">{{errors['phone'][0]}}</span>
									<input type="text" v-model="form.address" placeholder="Address.." />
									<span class="text-danger" v-if="errors['address']">{{errors['address'][0]}}</span>
									<input type="password" v-model="form.password" placeholder="Password" />
									<span class="text-danger" v-if="errors['password']">{{errors['password'][0]}}</span>
									<input type="password" v-model="form.password_confirmation" placeholder="Confirm Password" />
									<span class="text-danger" v-if="errors['password_confirmation']">{{errors['password_confirmation'][0]}}</span>
									<label class="first-child">
										<input type="radio" name="rememberme" value="forever">
										Sign up for our newsletter!
									</label>
									<div class="submit-text coupon">
										<button type="submit">Register</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
    </div>
</template>
<script>
import axios from 'axios';

    export default{
        name:'UserRegister',
		data(){
			return {
				form:{
					
				},
				errors:{

				}
			}
		},
		methods:{
			userRegister(){
				axios.post('/register',this.form)
					.then((result)=>{
						console.log(result)
					})
					.catch((err)=>{
						this.errors = err.response.data.errors
					})
			}
		}
    }
</script>