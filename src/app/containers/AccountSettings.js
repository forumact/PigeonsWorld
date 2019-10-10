import React, { Component } from 'react';

class AccountSettings extends Component {
    render() {
        return (
            <div class="dashboard-content">
                <div class="headline buttons primary">
                    <h4>Account Settings</h4>
                    <button form="profile-info-form" class="button mid-short primary">Save Changes</button>
                </div>
                <div class="form-box-items">
                    <div class="form-box-item">
                        <h4>Profile Information</h4>
                        <hr class="line-separator" />
                        <div class="profile-image">
                            <div class="profile-image-data">
                                <figure class="user-avatar medium">
                                    <img src="images/dashboard/profile-default-image.png" alt="profile-default" />
                                </figure>
                                <p class="text-header">Profile Photo</p>
                                <p class="upload-details">Minimum size 70x70px</p>
                            </div>
                            <a href="/" class="button mid-short dark-light">Upload Image...</a>
                        </div>
                        <form id="profile-info-form">
                            <div class="input-container">
                                <label for="acc_name" class="rl-label required">Account Name</label>
                                <input type="text" id="acc_name" name="acc_name" value="Johnny Fisher"
                                    placeholder="Enter your account name here..." />
                            </div>

                            <div class="input-container half">
                                <label for="new_pwd" class="rl-label">New Password</label>
                                <input type="password" id="new_pwd" name="new_pwd" placeholder="Enter your password here..." />
                            </div>

                            <div class="input-container half">
                                <label for="new_pwd2" class="rl-label">Repeat Password</label>
                                <input type="password" id="new_pwd2" name="new_pwd2" placeholder="Repeat your password here..." />
                            </div>

                            <div class="input-container">
                                <label for="new_email" class="rl-label">Email</label>
                                <input type="email" id="new_email" name="new_email" placeholder="Enter your email address here..." />
                            </div>

                            <div class="input-container half">
                                <label for="website_url" class="rl-label">Website</label>
                                <input type="text" id="website_url" name="website_url"
                                    placeholder="Enter your website link here..." />
                            </div>

                            <div class="input-container half">
                                <label for="country1" class="rl-label required">Country</label>
                                <label for="country1" class="select-block">
                                    <select name="country1" id="country1">
                                        <option value="0">Select your Country...</option>
                                        <option value="1">United States</option>
                                        <option value="2">Argentina</option>
                                        <option value="3">Brasil</option>
                                        <option value="4">Japan</option>
                                    </select>
                                </label>
                            </div>

                            <div class="input-container">
                                <label for="about" class="rl-label">About</label>
                                <input type="text" id="about" name="about"
                                    placeholder="This will appear bellow your avatar... (max 140 char)" />
                            </div>

                            <div class="input-container">
                                <label class="rl-label">Preferences</label>
                                <input type="checkbox" id="show_balance" name="show_balance" checked />
                                <label for="show_balance" class="label-check">
                                    <span class="checkbox primary"><span></span></span>
                                    Show account balance in the status bar
                    </label>


                                <input type="checkbox" id="email_notif" name="email_notif" />
                                <label for="email_notif" class="label-check">
                                    <span class="checkbox primary"><span></span></span>
                                    Send me email notifications
                    </label>

                            </div>

                        </form>
                    </div>
                    <div class="form-box-item spaced">
                        <h4>Social Media</h4>
                        <hr class="line-separator" />


                        <div class="input-container">
                            <ul class="share-links">
                                <li><a href="/" class="fb">&nbsp;</a></li>
                            </ul>
                            <input form="profile-info-form" type="text" id="social_fb_link" name="social_fb_link"
                                value="www.facebook.com/jhonnyfischershop" placeholder="Enter your social link here..." />
                        </div>

                        <div class="input-container">
                            <ul class="share-links">
                                <li><a href="/" class="twt">&nbsp;</a></li>
                            </ul>
                            <input form="profile-info-form" type="text" id="social_twt_link" name="social_twt_link"
                                placeholder="Enter your social link here..." />
                        </div>

                        <div class="input-container">
                            <ul class="share-links">
                                <li><a href="/" class="gplus">&nbsp;</a></li>
                            </ul>
                            <input form="profile-info-form" type="text" id="social_gplus_link" name="social_gplus_link"
                                placeholder="Enter your social link here..." />
                        </div>

                        <div class="input-container">
                            <ul class="share-links">
                                <li><a href="/" class="rss">&nbsp;</a></li>
                            </ul>
                            <input form="profile-info-form" type="text" id="social_rss_link" name="social_rss_link"
                                placeholder="Enter your social link here..." />
                        </div>

                        <div class="input-container">
                            <ul class="share-links">
                                <li><a href="/" class="db">&nbsp;</a></li>
                            </ul>
                            <input form="profile-info-form" type="text" id="social_db_link" name="social_db_link"
                                placeholder="Enter your social link here..." />
                        </div>

                        <div class="input-container">
                            <ul class="share-links">
                                <li><a href="/" class="be">&nbsp;</a></li>
                            </ul>
                            <input form="profile-info-form" type="text" id="social_be_link" name="social_be_link"
                                placeholder="Enter your social link here..." />
                        </div>

                        <div class="input-container">
                            <ul class="share-links">
                                <li><a href="/" class="de">&nbsp;</a></li>
                            </ul>
                            <input form="profile-info-form" type="text" id="social_de_link" name="social_de_link"
                                placeholder="Enter your social link here..." />
                        </div>
                    </div>

                    <div class="form-box-item">
                        <h4>Biling Information</h4>
                        <hr class="line-separator" />

                        <div class="input-container half">
                            <label for="first_name2" class="rl-label required">First Name</label>
                            <input type="text" form="profile-info-form" id="first_name2" name="first_name2"
                                placeholder="Enter your first name here..." />
                        </div>

                        <div class="input-container half">
                            <label for="last_name2" class="rl-label required">Last Name</label>
                            <input type="text" form="profile-info-form" id="last_name2" name="last_name2"
                                placeholder="Enter your last name here..." />
                        </div>

                        <div class="input-container">
                            <label for="company_name2" class="rl-label">Company Name</label>
                            <input type="text" form="profile-info-form" id="company_name2" name="company_name2"
                                placeholder="Enter your company name here..." />
                        </div>

                        <div class="input-container">
                            <label for="email_address2" class="rl-label required">Email Address</label>
                            <input type="email" form="profile-info-form" id="email_address2" name="email_address2"
                                placeholder="Enter your email address here..." />
                        </div>

                        <div class="input-container">
                            <label for="country2" class="rl-label required">Country</label>
                            <label for="country2" class="select-block">
                                <select form="profile-info-form" name="country2" id="country2">
                                    <option value="0">Select your Country...</option>
                                    <option value="1">United States</option>
                                    <option value="2">Argentina</option>
                                    <option value="3">Brasil</option>
                                    <option value="4">Japan</option>
                                </select>
                            </label>
                        </div>

                        <div class="input-container half">
                            <label for="state_city2" class="rl-label required">State/City</label>
                            <label for="state_city2" class="select-block">
                                <select form="profile-info-form" name="state_city2" id="state_city2">
                                    <option value="0">Select your State/City...</option>
                                    <option value="1">New York</option>
                                    <option value="2">Buenos Aires</option>
                                    <option value="3">Brasilia</option>
                                    <option value="4">Tokyo</option>
                                </select>
                            </label>
                        </div>

                        <div class="input-container half">
                            <label for="zipcode2" class="rl-label required">Zip Code</label>
                            <input form="profile-info-form" type="text" id="zipcode2" name="zipcode2"
                                placeholder="Enter your Zip Code here..." />
                        </div>

                        <div class="input-container">
                            <label for="address2" class="rl-label required">Full Address</label>
                            <input form="profile-info-form" type="text" id="address2" name="address2"
                                placeholder="Enter your address here..." />
                        </div>

                        <div class="input-container">
                            <label for="notes2" class="rl-label">Aditional Notes</label>
                            <textarea form="profile-info-form" id="notes2" name="notes2"
                                placeholder="Enter aditional notes here..."></textarea>
                        </div>

                        <div class="input-container">
                            <input type="checkbox" form="profile-info-form" id="copy_shipping" name="copy_shipping" checked />
                            <label for="copy_shipping" class="label-check">
                                <span class="checkbox primary"><span></span></span>
                                Copy information to shipping
                </label>
                        </div>
                    </div>
                    <div class="form-box-item padded">
                        <h4>Shipping Information</h4>
                        <hr class="line-separator" />

                        <div class="input-container half">
                            <label for="first_name3" class="rl-label required">First Name</label>
                            <input type="text" form="profile-info-form" id="first_name3" name="first_name3"
                                placeholder="Enter your first name here..." />
                        </div>

                        <div class="input-container half">
                            <label for="last_name3" class="rl-label required">Last Name</label>
                            <input type="text" form="profile-info-form" id="last_name3" name="last_name3"
                                placeholder="Enter your last name here..." />
                        </div>

                        <div class="input-container">
                            <label for="company_name3" class="rl-label">Company Name</label>
                            <input type="text" form="profile-info-form" id="company_name3" name="company_name3"
                                placeholder="Enter your company name here..." />
                        </div>

                        <div class="input-container">
                            <label for="email_address3" class="rl-label required">Email Address</label>
                            <input type="email" form="profile-info-form" id="email_address3" name="email_address3"
                                placeholder="Enter your email address here..." />
                        </div>

                        <div class="input-container">
                            <label for="country3" class="rl-label required">Country</label>
                            <label for="country3" class="select-block">
                                <select form="profile-info-form" name="country3" id="country3">
                                    <option value="0">Select your Country...</option>
                                    <option value="1">United States</option>
                                    <option value="2">Argentina</option>
                                    <option value="3">Brasil</option>
                                    <option value="4">Japan</option>
                                </select>
                            </label>
                        </div>

                        <div class="input-container half">
                            <label for="state_city3" class="rl-label required">State/City</label>
                            <label for="state_city3" class="select-block">
                                <select form="profile-info-form" name="state_city3" id="state_city3">
                                    <option value="0">Select your State/City...</option>
                                    <option value="1">New York</option>
                                    <option value="2">Buenos Aires</option>
                                    <option value="3">Brasilia</option>
                                    <option value="4">Tokyo</option>
                                </select>
                            </label>
                        </div>

                        <div class="input-container half">
                            <label for="zipcode3" class="rl-label required">Zip Code</label>
                            <input form="profile-info-form" type="text" id="zipcode3" name="zipcode3"
                                placeholder="Enter your Zip Code here..." />
                        </div>

                        <div class="input-container">
                            <label for="address3" class="rl-label required">Full Address</label>
                            <input form="profile-info-form" type="text" id="address3" name="address3"
                                placeholder="Enter your address here..." />
                        </div>

                        <div class="input-container">
                            <label for="notes3" class="rl-label">Aditional Notes</label>
                            <textarea form="profile-info-form" id="notes3" name="notes3"
                                placeholder="Enter aditional notes here..."></textarea>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AccountSettings;